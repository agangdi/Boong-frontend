import React from 'react'
import styled from 'styled-components'

const TalentDiv = styled.div`
  width: 100%;
  max-width: 313px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 41px 29px;
`

const Talent = styled.div`
  width: 255px;
  height: 363px;
  font-family: SourceHanSansCN-Heavy;
`

const TalentInner = styled.div`
  width: 90%;
  text-align: left;
  margin:0 auto
`

const TalentTitle = styled(TalentInner)`
  margin-top: 11px;
  font-size: 12px;
  color: #6a6a6a;
  letter-spacing: 1px;
`

const TalentPrice = styled(TalentInner)`
  font-size: 14px;
  color: #F94108;
  letter-spacing: 1.17px;
  line-height: 17px;
  text-align: right;
`

const TalentAuthor = styled(TalentInner)`
  font-size: 12px;
  color: #6a6a6a;
  letter-spacing: 1px;
`

// interface Product {
//   pic: string;
//   title: string;
//   price: string;
//   author: string;
// }

export default function Component (props: any) {
  return (
    <TalentDiv>
      <Talent>
        <div style={{
          width: "100%", 
          height: "305px",
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          backgroundImage:`url(${props.pic}`}}></div>
        <TalentTitle>{props.title}</TalentTitle>
        <TalentPrice>{props.price}</TalentPrice>
        <TalentAuthor>{props.author}</TalentAuthor>
      </Talent>
    </TalentDiv>
  )
}
