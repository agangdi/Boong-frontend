import React,{ useEffect } from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { Modal, Title } from '../../components/general';
import { NormalButton } from '../../components/NFTButton';
import { InputComponent, TextAreaComponent } from '../../components/Input';
import { useDispatch } from 'react-redux';
import useSendMail from '../../hooks/generalHooks/useSendMail';

const Page = styled.div`
  display: flex;
  margin-top: 65px;
  padding: ${DISTANCE.sm} 100px;
  height: calc(100vh - 65px);
  width: 100%;
  justify-items: center;
`;

const ContactForm = styled.div`
  margin: 0 auto;
  padding: ${DISTANCE.sm};
  width: 500px;
`;

const Description = styled.div`
  margin: ${DISTANCE.xs} 0;
  color: ${COLOR.text_2};
  font-size: ${FONT.md};
`;

const InputTitle = styled.h2`
  margin-bottom: 5px;
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  font-weight: 400;
`;

const Link = styled.a`
  display: inline;
  color: ${COLOR.text_2};
  text-decoration: none;
`;

const InputBox = styled.div`
  margin: 15px 0;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled(NormalButton)`
  width: 70px;
  margin-right: ${DISTANCE.sm};
`;

const ModalContent = styled.div`
  margin-bottom: ${DISTANCE.sm};
  line-height: 2;
  text-align: center;
  color: #5f6f9b;
  font-size: ${FONT.sm};
`;

const RemindMessage = styled.span`
  margin-left: 5px;
  color: ${COLOR.text_alert};
`;

const ErrorMessage = styled.div`
  margin-top: ${DISTANCE.xs};
  color: ${COLOR.text_alert};
`;

const Loading = styled.div``;

const ContactUsPage = () => {
  const {
    handleInputChange,
    handleSendMail,
    setName,
    setContent,
    setPhone,
    setEmail,
    goHomePage,
    isNameValid,
    isEmailValid,
    isContentValid,
    isModalShowed,
    errorMessage,
    isUserLoading,
    setErrorMessage,
  } = useSendMail();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(setErrorMessage(null));
  }, []);

  return (
    <>
      <Page>
        <ContactForm>
          {isModalShowed && (
            <Modal closeModalMessage={'????????????'} closeModal={goHomePage}>
              <ModalContent>
                ?????????????????????????????????????????????????????????
              </ModalContent>
            </Modal>
          )}
          <Title>????????????</Title>

          <Description>
            <Link href="tel:0912345678">Tel: 0912-345-678</Link> |{' '}
            <Link href="mailto:info@my-domain.com">info@giveplusplus.com</Link>
          </Description>

          <InputBox>
            <InputTitle>??????</InputTitle>
            <InputComponent
              $margin={0}
              maxLength={20}
              onChange={handleInputChange(setName)}
            ></InputComponent>
            {isNameValid === false && (
              <RemindMessage>????????????????????????</RemindMessage>
            )}
          </InputBox>

          <InputBox>
            <InputTitle>??????</InputTitle>
            <InputComponent
              $margin={0}
              onChange={handleInputChange(setEmail)}
            ></InputComponent>
            {isEmailValid === false && (
              <RemindMessage>????????????????????????</RemindMessage>
            )}
          </InputBox>

          <InputBox>
            <InputTitle>??????</InputTitle>
            <InputComponent
              $margin={0}
              onChange={handleInputChange(setPhone)}
            ></InputComponent>
          </InputBox>

          <InputBox>
            <InputTitle>??????</InputTitle>
            <TextAreaComponent
              rows={'3'}
              $margin={0}
              maxLength={500}
              onChange={handleInputChange(setContent)}
            ></TextAreaComponent>
            {isContentValid === false && (
              <ErrorMessage>????????????????????????</ErrorMessage>
            )}
          </InputBox>

          <Buttons>
            {isUserLoading ? (
              <Loading>Loading...</Loading>
            ) : (
              <>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <Button onClick={handleSendMail} $margin={0}>
                  ??????
                </Button>
              </>
            )}
            <Button onClick={goHomePage} $margin={0}>
              ??????
            </Button>
          </Buttons>
        </ContactForm>
      </Page>
    </>
  );
};

export default ContactUsPage;
