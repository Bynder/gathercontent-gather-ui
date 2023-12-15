import React, { useContext } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'link... Remove this comment to see the full error message
import Linkify from "linkifyjs/react";
import cx from "classnames";
import { Comment } from "lib";
import TooltipWrapper from "../TooltipWrapper";

// eslint-disable-next-line react/prop-types
function BlurBottom({ className }: any) {
  return (
    <span
      className={`gui-comment-blur-bottom absolute h-8 w-full top-0 left-0 mt-24 bg-blur-neutral-98-bottom group-hover:bg-blur-grey-bottom gui-conversation__text__cutoff ${className}`}
    />
  );
}

function EditedText() {
  return (
    <span className="weight-semi-bold text-neutral-primary"> (Edited)</span>
  );
}

function CommentText({
  children,
  users,
  showFullText,
  currentUser,
  hasBeenEdited,
}: any) {
  const { isEditing }: any = useContext(Comment.Context);

  const highlightMentions = () => {
    const pattern = /(\B@\w+)+/gi;
    const strArr = children.split(pattern);
    return strArr.map((subStr: any) => {
      if (subStr.match(pattern)) {
        const username = subStr.substr(1);
        const matches = users.filter((user: any) => user.display === username);
        if (matches.length) {
          const { display, name, pending } = matches[0];
          const mentionsClass = cx("font-semi-bold", {
            "text-purple-primary":
              display === (currentUser ? currentUser.display : ""),
            "border-0 border-b-[1px] border-dashed": pending,
          });

          return (
            <span key={subStr} title={name} className={mentionsClass}>
              {pending ? (
                <TooltipWrapper tooltipText="Invite pending">
                  {subStr}
                </TooltipWrapper>
              ) : (
                subStr
              )}
            </span>
          );
        }
      }
      return subStr;
    });
  };

  const classNames = cx(
    "text-neutral-20 break-words whitespace-pre-line relative",
    {
      "overflow-visible": showFullText,
      "overflow-hidden max-h-32": !showFullText,
    }
  );

  return isEditing ? null : (
    <div className={classNames}>
      <p className="gui-comment-text m-0 text-sm break-words">
        <Linkify>{highlightMentions()}</Linkify>
        {hasBeenEdited && <EditedText />}
        <BlurBottom className={showFullText ? "hidden" : ""} />
      </p>
    </div>
  );
}

CommentText.defaultProps = {
  showFullText: true,
  hasBeenEdited: false,
};

export { CommentText };
