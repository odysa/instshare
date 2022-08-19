import React, { FC } from 'react';

interface HelloProps{
  message: string;
}

const Hello:FC<HelloProps> = (props) => {
  const { message } = props;
  return (
    <div className="flex w-auto h-screen justify-center font-mono">
      <div className="my-auto text-8xl text-purple-600">
        {message}
      </div>
    </div>
  );
};

export default Hello;
