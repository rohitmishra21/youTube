import React, { useEffect } from "react";
import { COMMENT_URL } from "../utils/contants";
import { useState } from "react";
import Comment from "./Comment";

const CommentData = ({ id }) => {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        commentDataHendler();
    }, []);

    async function commentDataHendler() {
        const data = await fetch(COMMENT_URL + id);
        const json = await data.json();
        setComments(json?.items);

    }
    return (
        <div>
            {comments?.map((data) => (
                <Comment key={data.id} data={data} />
            ))}
        </div>
    );
};

export default CommentData;
