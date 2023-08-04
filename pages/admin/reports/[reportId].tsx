import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BiCopyAlt } from 'react-icons/bi';
import useMapView from '@/hooks/useMapView';
import { postReportApprove } from '@/api/admin';
import { getReport } from '@/api/report';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import Modal from '@/components/Modal';
import RejectModal from '@/components/RejectModal';
import * as styles from '@/components/styles/report-solve/style';

export default function AdminReportDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<string>('');
  const router = useRouter();
  const reportId = router.query.reportId;

  const { data: report } = useQuery({
    queryKey: ['report', reportId],
    queryFn: () => getReport(Number(reportId)),
    enabled: !!reportId,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const {} = useMapView(mapRef, report?.latitude, report?.longitude);

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(report?.location ?? '');
  };

  const handleClickAcceptBtn = () => {
    approveReportMutation.mutate({
      reportId: Number(reportId),
    });
  };

  const handleClickRejectBtn = () => {
    setIsOpen(!isOpen);
    setType('반려');
  };

  const approveReportMutation = useMutation({
    mutationFn: postReportApprove,
    onSuccess: () => {
      setIsOpen(!isOpen);
      setType('승인');
    },
  });

  return (
    <>
      <Header title="신고 내용 확인" hasBackButton />

      {report && (
        <>
          <Container>
            <styles.Section>
              <styles.SectionTitle>발생 지역</styles.SectionTitle>
              <styles.SectionDiv>
                <styles.Map ref={mapRef} />
              </styles.SectionDiv>
              <styles.CopyButton type="button" onClick={handleClickCopy}>
                <styles.Address>{report.location}</styles.Address>
                <BiCopyAlt />
              </styles.CopyButton>
            </styles.Section>

            <styles.Section>
              <styles.SectionTitle>첨부된 사진</styles.SectionTitle>
              <styles.ImagesDiv>
                <ShapedImage src={report.photoRaincatch} alt="첨부된 사진" />
                {report.photoAround && (
                  <ShapedImage src={report.photoAround} alt="첨부된 사진" />
                )}
              </styles.ImagesDiv>
            </styles.Section>

            <styles.Section>
              <styles.SectionTitle>위치 설명</styles.SectionTitle>
              <Textarea rows={6} disabled value={report.description}></Textarea>
            </styles.Section>

            <styles.ButtonDiv>
              <Button onClick={handleClickAcceptBtn} type="button">
                승인하기
              </Button>
              <Button onClick={handleClickRejectBtn} type="button" secondary>
                반려하기
              </Button>
            </styles.ButtonDiv>
          </Container>
          {isOpen &&
            (type === '승인' ? (
              <Modal text={'승인 완료'} />
            ) : (
              <RejectModal
                onClose={() => setIsOpen(false)}
                reportId={Number(reportId)}
              />
            ))}
        </>
      )}
    </>
  );
}
