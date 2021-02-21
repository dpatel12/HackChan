import React from "react";
import { useForm } from "react-hook-form";

export default function CommentForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <label name="commentFormLabel">Comment</label>
      <textarea name="commentContent" ref={register}/>
      { errors.commentContent && <p>You can't submit an empty comment!</p> }
      <input type="submit"/>
    </form>
  );
}
