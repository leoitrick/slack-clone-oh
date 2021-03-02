import React from 'react';
import style from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # tricking
                    </ChannelName>
                    <ChannelInfo>
                        Tricking is a mix of martial arts with acrobatics
                    </ChannelInfo>
                </Channel>
                    <ChannelDetails>
                        <div>
                            Details
                        </div>
                        <Info />
                    </ChannelDetails>
               
            </Header>
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
            <ChatInput />

        </Container>
    )
}

export default Chat;

const Container = style.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Header = style.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-itens: center;
    border-bottom: 1px solid rgb(83, 39, 83, .13);
    justify-content: space-between;

  
`

const MessageContainer = style.div`
`

const Channel = style.div`
`

const ChannelDetails = style.div`
    display: flex;
    align-items: center;
    color: #606060;
    
`

const ChannelName = style.div`
 font-weight: 700;
`
const ChannelInfo = style.div`
 font-weight: 400;
 color: #606060;
 font-size: 13px;
 margin-top: 8px;

`
const Info = style(InfoOutlinedIcon)`
    margin-left: 10px;
`