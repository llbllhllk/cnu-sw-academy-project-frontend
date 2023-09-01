import CircularProfile from './CircularProfile';
import ReviewProfileBox from './ReviewProfileBox';
import StoreInfoBox from './StoreInfoBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
// import FaceIcon from '@mui/icons-material/Face';
import StarIcon from '@mui/icons-material/Star';
import Button from 'components/common/Button';
import Card from 'components/common/Card';
import styled from 'styled-components';

const StoreInfo = ({ title, children }) => {
  return (
    <>
      <ButtonBox>
        <Button width='72px' height='30px'>
          게시판
        </Button>
        <Spacer />
        <Button width='120px' height='30px'>
          식당 상세 정보
        </Button>
      </ButtonBox>

      <Card title={title} width='50%'>
        <div height='100px' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <StoreInfoBox width='46%' height='130px' top='30px'>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
              <IconBox>
                <Star />
                <InfoTextBox>4.25 / 5.0</InfoTextBox>
              </IconBox>
              <IconBox>
                <LocationOnIcon />
                <InfoTextBox>대전시 유성구 궁동 000-00</InfoTextBox>
              </IconBox>
              <IconBox>
                <PhoneIcon />
                <InfoTextBox>042-000-0000</InfoTextBox>
              </IconBox>
            </div>
          </StoreInfoBox>
          <StoreInfoBox width='46%' height='160px'>
            지도
          </StoreInfoBox>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '10px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <ReviewTextBox>Review</ReviewTextBox>
          <Button width='75px' height='30px'>
            리뷰 작성
          </Button>
        </div>

        <StoreInfoBox width='100%' height='180px'>
          <CenteredBox>
            <ReviewProfileBox width='95%' height='75px' top='7px'>
              <ProfileContainer>
                <CircularProfile></CircularProfile>
                <ProfileInfo>
                  <div>익명 1</div>
                  <WriteBox></WriteBox>
                </ProfileInfo>
              </ProfileContainer>
            </ReviewProfileBox>
            <ReviewProfileBox width='95%' height='75px' top='10px'>
              <ProfileContainer>
                <CircularProfile></CircularProfile>
                <ProfileInfo>
                  <div>익명 2</div>
                  <WriteBox></WriteBox>
                </ProfileInfo>
              </ProfileContainer>
            </ReviewProfileBox>
          </CenteredBox>
        </StoreInfoBox>
      </Card>
    </>
  );
};

const ButtonBox = styled.form`
  margin-bottom: 10px;
  display: flex;
`;

const Spacer = styled.div`
  width: 15px;
`;

const ReviewTextBox = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const InfoTextBox = styled.div`
  margin-left: 10px;
`;

const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Star = styled(StarIcon)`
  color: #fc4c4e;
`;

const WriteBox = styled.div`
  border: 2px solid #d9d9d9;
  width: 500px;
  height: 40px;
  border-radius: 10px;
  background-color: #d9d9d9;
  position: relative;
  z-index: 2;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export default StoreInfo;
