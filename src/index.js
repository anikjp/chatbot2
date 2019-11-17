import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


ReactDOM.render(
<div>
<ThemeProvider theme={theme}>
  <ChatBot
speechSynthesis={{ enable: true, lang: 'ja-JP' }}
headerTitle="Speech Recognition"
recognitionEnable={true}
floating={true}
steps={[
    {
      id: '1',
      message: 'お名前は何ですか？',
      trigger: '2',
    },
{
  id: '2',
    user: true,
  trigger: '3',
},
{
  id: '3',
    message: '{previousValue}ですね, はじめまして！',
  trigger: '4',
},
{
  id: '4',
    user: true,
  trigger: '3',
},
]}
/>
</ThemeProvider>
</div>,
document.getElementById('root')
);
