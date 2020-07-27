import React from 'react'

export default function CommentTile(props) {
    return (
        <div className="single-comment">
            <p><b>Subject:</b> {props.comment.name}</p>
            <p><b>Comment:</b> {props.comment.body}</p>
            <p><b>Email:</b> {props.comment.email}</p>
        </div>
    )
}
