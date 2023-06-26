"use client";
import "../app/globals.css";
import React, { Fragment, PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function CheckoutLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex items-start justify-center">
      <div className="min-h-screen w-[1030px] flex-col items-center justify-center p-10">
        <div className="flex items-center justify-center rounded-lg bg-gray-900 p-6">
          <div className="flex items-center gap-2">
            <p className="font-bold capitalize">Food Nirvana</p>
            <p className="rounded-lg border-2 border-yellow-400 p-1 px-3 font-bold uppercase text-yellow-400">
              pro
            </p>
          </div>
        </div>

        <div className="flex-1">{children}</div>
        <div className="flex justify-center gap-2">
          <p>Secured by</p>
          <svg
            width="107"
            height="22"
            viewBox="0 0 107 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0888 6.40742V14.5552C19.0888 18.1983 15.331 20.3708 12.5253 18.3503L15.6367 16.1083V6.58952C15.6367 5.13877 14.1405 4.27368 13.0234 5.07807L9.78389 7.41195C8.86242 8.07567 7.77971 8.42985 6.67221 8.42985C5.56472 8.42985 4.482 8.07567 3.56053 7.41195L11.2482 1.87417C14.5996 -0.540651 19.0888 2.05626 19.0888 6.40742Z"
              fill="white"
            ></path>
            <path
              d="M3.5595 3.96431V13.4852C3.5595 14.936 5.05574 15.8011 6.17286 14.9961L9.41235 12.6622C10.3342 11.9982 11.4173 11.6438 12.5253 11.6438C13.6333 11.6438 14.7164 11.9982 15.6382 12.6622L7.948 18.2C4.59665 20.6138 0.107422 18.0185 0.107422 13.6673V5.5195C0.107422 1.87485 3.86523 -0.297718 6.67093 1.72283L3.5595 3.96431Z"
              fill="white"
            ></path>
            <path
              d="M31.491 17.6159C29.7476 17.6159 28.1354 17.2457 26.6543 16.5051L27.9734 13.6355C29.3774 14.4532 30.6425 14.862 31.7687 14.862C32.4167 14.862 32.7407 14.7 32.7407 14.376C32.7407 14.2989 32.7252 14.2295 32.6944 14.1678C32.679 14.1061 32.6327 14.0598 32.5555 14.0289C32.4938 13.9826 32.4398 13.9518 32.3935 13.9363C32.3627 13.9055 32.2933 13.8746 32.1853 13.8438C32.0927 13.7975 32.031 13.7666 32.0001 13.7512L30.1256 13.0107C28.3822 12.3473 27.5106 11.2442 27.5106 9.70134C27.5106 8.59052 27.8963 7.73426 28.6677 7.13257C29.4391 6.53087 30.5807 6.23003 32.0927 6.23003C33.3269 6.23003 34.6152 6.44602 35.9574 6.87801L34.9855 9.70134C33.7049 9.17679 32.6481 8.91451 31.815 8.91451C31.2441 8.91451 30.9587 9.06879 30.9587 9.37735C30.9587 9.53163 31.0204 9.65506 31.1439 9.74763C31.2673 9.82477 31.4756 9.92505 31.7687 10.0485L33.6201 10.7427C34.484 11.0667 35.132 11.4756 35.564 11.9693C35.996 12.463 36.212 13.1418 36.212 14.0058C36.212 15.24 35.7954 16.1503 34.9623 16.7365C34.1292 17.3228 32.9721 17.6159 31.491 17.6159Z"
              fill="white"
            ></path>
            <path
              d="M42.5898 6.25317C44.2406 6.25317 45.5366 6.73915 46.4777 7.71112C47.4188 8.66766 47.8894 10.087 47.8894 11.9693V12.7561H40.2293C40.4453 14.0521 41.3556 14.7 42.9601 14.7C44.04 14.7 45.0737 14.376 46.0611 13.7281L47.3339 16.3663C45.9763 17.1994 44.5029 17.6159 42.9138 17.6159C41.1241 17.6159 39.6816 17.0991 38.5862 16.0654C37.4908 15.0317 36.9431 13.6664 36.9431 11.9693C36.9431 10.195 37.46 8.7988 38.4937 7.78055C39.5428 6.7623 40.9081 6.25317 42.5898 6.25317ZM42.4741 8.72937C41.1473 8.72937 40.4067 9.38507 40.2525 10.6965H44.5106C44.4952 10.0793 44.2946 9.60106 43.9089 9.26164C43.5386 8.9068 43.0604 8.72937 42.4741 8.72937Z"
              fill="white"
            ></path>
            <path
              d="M52.8589 1.06934V17.2688H49.3645V1.06934H52.8589Z"
              fill="white"
            ></path>
            <path
              d="M58.5089 1.06934V17.2688H55.0144V1.06934H58.5089Z"
              fill="white"
            ></path>
            <path
              d="M60.6412 21.8972V6.57716H64.1357V8.03511H64.1819C64.9225 6.83172 66.0873 6.23003 67.6764 6.23003C69.1421 6.23003 70.3532 6.73144 71.3097 7.73426C72.2662 8.72166 72.7445 10.1179 72.7445 11.923C72.7445 13.7281 72.2662 15.132 71.3097 16.1348C70.3532 17.1222 69.1421 17.6159 67.6764 17.6159C66.0873 17.6159 64.9225 17.0142 64.1819 15.8109H64.1357V21.8972H60.6412ZM66.7044 14.4223C67.4141 14.4223 68.0004 14.1986 68.4632 13.7512C68.9261 13.2884 69.1575 12.679 69.1575 11.923C69.1575 11.167 68.9261 10.5653 68.4632 10.1179C68.0004 9.65506 67.4141 9.42364 66.7044 9.42364C65.9793 9.42364 65.3853 9.65506 64.9225 10.1179C64.4596 10.5653 64.2282 11.167 64.2282 11.923C64.2282 12.679 64.4596 13.2884 64.9225 13.7512C65.3853 14.1986 65.9793 14.4223 66.7044 14.4223Z"
              fill="white"
            ></path>
            <path
              d="M78.781 17.6159C77.3153 17.6159 76.1042 17.1222 75.1477 16.1348C74.1911 15.132 73.7129 13.7281 73.7129 11.923C73.7129 10.1179 74.1911 8.72166 75.1477 7.73426C76.1042 6.73144 77.3153 6.23003 78.781 6.23003C80.3701 6.23003 81.5349 6.83172 82.2754 8.03511H82.3217V6.57716H85.8162V17.2688H82.3217V15.8109H82.2754C81.5349 17.0142 80.3701 17.6159 78.781 17.6159ZM79.753 14.4223C80.4781 14.4223 81.0721 14.1986 81.5349 13.7512C81.9977 13.2884 82.2292 12.679 82.2292 11.923C82.2292 11.167 81.9977 10.5653 81.5349 10.1179C81.0721 9.65506 80.4781 9.42364 79.753 9.42364C79.0433 9.42364 78.457 9.65506 77.9942 10.1179C77.5313 10.5653 77.2999 11.167 77.2999 11.923C77.2999 12.679 77.5313 13.2884 77.9942 13.7512C78.457 14.1986 79.0433 14.4223 79.753 14.4223Z"
              fill="white"
            ></path>
            <path
              d="M91.8548 17.6159C90.1115 17.6159 88.4992 17.2457 87.0181 16.5051L88.3372 13.6355C89.7412 14.4532 91.0063 14.862 92.1325 14.862C92.7805 14.862 93.1045 14.7 93.1045 14.376C93.1045 14.2989 93.0891 14.2295 93.0582 14.1678C93.0428 14.1061 92.9965 14.0598 92.9194 14.0289C92.8577 13.9826 92.8037 13.9518 92.7574 13.9363C92.7265 13.9055 92.6571 13.8746 92.5491 13.8438C92.4565 13.7975 92.3948 13.7666 92.364 13.7512L90.4895 13.0107C88.7461 12.3473 87.8744 11.2442 87.8744 9.70134C87.8744 8.59052 88.2601 7.73426 89.0315 7.13257C89.8029 6.53087 90.9446 6.23003 92.4565 6.23003C93.6908 6.23003 94.979 6.44602 96.3213 6.87801L95.3493 9.70134C94.0688 9.17679 93.0119 8.91451 92.1788 8.91451C91.608 8.91451 91.3226 9.06879 91.3226 9.37735C91.3226 9.53163 91.3843 9.65506 91.5077 9.74763C91.6311 9.82477 91.8394 9.92505 92.1325 10.0485L93.9839 10.7427C94.8479 11.0667 95.4959 11.4756 95.9278 11.9693C96.3598 12.463 96.5758 13.1418 96.5758 14.0058C96.5758 15.24 96.1593 16.1503 95.3261 16.7365C94.493 17.3228 93.3359 17.6159 91.8548 17.6159Z"
              fill="white"
            ></path>
            <path
              d="M101.889 17.6159C100.146 17.6159 98.5335 17.2457 97.0524 16.5051L98.3715 13.6355C99.7755 14.4532 101.041 14.862 102.167 14.862C102.815 14.862 103.139 14.7 103.139 14.376C103.139 14.2989 103.123 14.2295 103.092 14.1678C103.077 14.1061 103.031 14.0598 102.954 14.0289C102.892 13.9826 102.838 13.9518 102.792 13.9363C102.761 13.9055 102.691 13.8746 102.583 13.8438C102.491 13.7975 102.429 13.7666 102.398 13.7512L100.524 13.0107C98.7803 12.3473 97.9087 11.2442 97.9087 9.70134C97.9087 8.59052 98.2944 7.73426 99.0658 7.13257C99.8372 6.53087 100.979 6.23003 102.491 6.23003C103.725 6.23003 105.013 6.44602 106.356 6.87801L105.384 9.70134C104.103 9.17679 103.046 8.91451 102.213 8.91451C101.642 8.91451 101.357 9.06879 101.357 9.37735C101.357 9.53163 101.419 9.65506 101.542 9.74763C101.665 9.82477 101.874 9.92505 102.167 10.0485L104.018 10.7427C104.882 11.0667 105.53 11.4756 105.962 11.9693C106.394 12.463 106.61 13.1418 106.61 14.0058C106.61 15.24 106.194 16.1503 105.36 16.7365C104.527 17.3228 103.37 17.6159 101.889 17.6159Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </main>
  );
}
