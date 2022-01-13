import React from 'react';

// STYLES
import { LoadingText, LoadingDot } from '@Styles/main';

const Loading = () => {
  return (
    <LoadingText>
      Loading
      <LoadingDot>.</LoadingDot>
      <LoadingDot>.</LoadingDot>
      <LoadingDot>.</LoadingDot>
    </LoadingText>
  );
};

export default Loading;
