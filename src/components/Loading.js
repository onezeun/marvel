import React from 'react';
import { Ring } from '@uiball/loaders';

const Loading = () => {
  return (
    <div className="mt-[30%] flex w-full cursor-default flex-col items-center gap-10 font-aggro text-3xl shadow-main_purple text-shadow md:mt-[20%]">
      <Ring color="white" />
      Loading...
    </div>
  );
};

export default Loading;
