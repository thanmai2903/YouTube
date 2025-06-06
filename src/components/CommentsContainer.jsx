import React from "react";

const commentsData = [
  {
    name: "wd",
    text: "Hello",
    replies: [],
  },
  {
    name: "wd",
    text: "Hello",
    replies: [
      {
        name: "wd",
        text: "Hello",
        replies: [
          {
            name: "wd",
            text: "Hello",
            replies: [
              {
                name: "wd",
                text: "Hello",
                replies: [
                  {
                    name: "wd",
                    text: "Hello",
                    replies: [
                      {
                        name: "wd",
                        text: "Hello",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "wd",
    text: "Hello",
    replies: [],
  },
  {
    name: "wd",
    text: "Hello",
    replies: [],
  },
  {
    name: "wd",
    text: "Hello",
    replies: [
      {
        name: "wd",
        text: "Hello",
        replies: [],
      },
    ],
  },
  {
    name: "wd",
    text: "Hello",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-50 my-2 p-2 rounded">
      <img
        className="w-12 h-12"
        alt="user"
        src="data:image/png;base64,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"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
