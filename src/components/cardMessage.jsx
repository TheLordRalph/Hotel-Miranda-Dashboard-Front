import { Title, SubTitle, UserPhoto } from '../components/styled';

export default function CardMessage(props) {
    return (
        <div style={{ minWidth: '431px', marginRight: '40px', background: '#FFFFFF 0% 0% no-repeat padding-box', border: '1px solid #EBEBEB', borderRadius: '20px', padding: '30px', }}>
        <SubTitle size='14px' lineHeight='21px'>{props.subject}</SubTitle>
        <SubTitle size='16px' lineHeight='28px' color='#4E4E4E' margin='0 0 56px 0'>{props.message}</SubTitle>
        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
          <div>
            <Title size='16px' lineHeight='25px' width='fit-content' margin='0 0 2px 0'>{props.name}</Title>
            <SubTitle size='14px' lineHeight='21px'>{props.email}</SubTitle>
            <SubTitle size='14px' lineHeight='21px'>{props.phone}</SubTitle>
          </div>
          <svg style={{ margin: 'auto 0 4px auto', }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5AD07A" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
          </svg>
          <svg style={{ margin: 'auto 0 4px 16px', }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E23428" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </div>
    )

}