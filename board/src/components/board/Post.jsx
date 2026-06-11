import {Textarea} from "@/components/ui/textarea.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend} from "@/components/ui/field.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";

function Post(props) {
    const [title,setTitle]=useState('');
    const [writer,setWriter]=useState('');
    const [content,setContent]=useState('');

    return(
        <>
            <form
                action="#"
                className="w-1/2 mx-auto"

            >
                <FieldLegend>문의사항</FieldLegend>
                <FieldDescription>
                    문의사항이 있으실 경우 아래 게시물을 작성해주시면 답변드리겠습니다.
                </FieldDescription>
                <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="title">제목</FieldLabel>
                    <Input
                        id="title"
                        type="text"
                        placeholder="게시물 제목을 작성하세요"
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                    <FieldDescription>
                        문의사항의 제목을 작성하세요
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="writer">작성자</FieldLabel>
                    <Input
                        id="writer"
                        type="text"
                        placeholder="작성자의 성함을 입력해주세요"
                        onChange={(event) => {
                            setWriter(event.target.value);
                        }}
                    />
                    <FieldDescription>
                        문의 사항 내용을 상세하게 작성해주세요.
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="content">내용</FieldLabel>
                    <Input
                        id="content"
                        placeholder="문의하실 내용을 작성하세요"
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                    />
                </Field>
                </FieldGroup>
                <Button type="submit" onClick={() => {
                    if (!confirm('게시 오라이?')){
                        return; // 함수를 끝내버리깅
                    }
                    const posts = props.posts; // 현재 존재하는 모든 게시물
                    // 현재 날짜 문자열 생성
                    const date = new Date();

                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, "0");
                    const day = (date.getDate()).toString().padStart(2, "0");

                    const dateString = `${year}-${month}-${day}`;
                    // 현재 작성한 새로운 게시물 내용
                    const newPostId = props.postCount + 1;
                    const newPost = {
                        id: newPostId,
                        title: title,
                        writer: writer,
                        wroteAt: dateString,
                        content: content,
                        viewCount: 0
                    }
                    // 게시물의 전체 개수를 마지막 게시물의 아이디로 업데이트
                    props.setPostCount(newPostId);
                    // 상태를 업데이트 --> 원래 게시물 목록 + 현재 작성 게시물
                    props.setPosts([...posts, newPost]);
                    // 선택된 post Id를 0으로 되돌린다 (Board화면으로 전환)
                    props.setPostId(0);
                }}>작성하기</Button>
                <Button type="button" onClick={ () => {
                    if (!confirm('돌아가고 싶은 마음 뿐이야아~~~')){
                        return; // 함수를 끝내버리깅
                    }
                    // 선택된 post Id를 0으로 되돌린다 (Board화면으로 전환)
                    props.setPostId(0);
                }}>돌아가기</Button>
            </form>
        </>
    )
}
export default Post;