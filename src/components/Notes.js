import React, { useState, moment } from "react";
import { Comment, List, Tooltip, Button, Form, Input } from "antd";

export default function Notes() {
  const { TextArea } = Input;
  const [show, setShow] = useState(false);

  function changeText() {
    setShow(true);
  }
  function moveOut() {
    setShow(false);
  }

  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea
          rows={4}
          onChange={onChange}
          value={value}
          placeholder="Add your note…"
        />
      </Form.Item>
      <Form.Item>
        <Button
          onMouseOver={changeText}
          onMouseOut={moveOut}
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
          style={{ marginLeft: "58vw", backgroundColor: "#28589A" }}
        >
          {show ? "Default" : "Save"}
        </Button>
      </Form.Item>
    </>
  );

  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: "https://joeschmoe.io/api/v1/random",
          content: <p>{value}</p>,
          datetime: moment("2016-11-22").fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: <div style={{color: "#1E293B", fontSize:"16px"}}>James James</div>,
      avatar: "https://joeschmoe.io/api/v1/random",
      content: (
        <p style={{color: "#475569", fontSize: "14px", fontWeight: "600"}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      ),
      datetime: (
        <Tooltip title="2016-11-22 11:22:33">
          <span>8 hours ago</span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author:  <div style={{color: "#1E293B", fontSize:"16px"}}>James James</div>,
      avatar: "https://joeschmoe.io/api/v1/random",
      content: (
        <p style={{color: "#475569", fontSize: "14px", fontWeight: "600"}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      ),
      datetime: (
        <Tooltip title="2016-11-22 10:22:33">
          <span>9 hours ago</span>
        </Tooltip>
      ),
    },
  ];
  return (
    <div>
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
    </div>
  );
}
