
import {Button} from "@/components/ui/button.jsx";

function Viewer(props) {
    const posts = props.posts;
    const postId = props.postId;
    // 전달받은 포스트아이디를 가지는 포스트 객체를 전체 개시물 안에서 찾는다
    const post = posts.find((post)=>post.id===postId);

    return(
        <>
                <section className="w-2xl mx-auto">
                    <h1>문의내용</h1>
                    <div>
                        게시물ID: {post.id}
                    </div>
                    <div>
                        제목: {post.title}
                    </div>
                    <div>
                        작성자: {post.writer}
                    </div>
                    <div>
                        작성날짜: {post.wroteAt}
                    </div>
                    <div>
                        조회수: {post.viewCount}
                    </div>
                    <div>
                        내용: {post.content}
                    </div>

                    <Button type="button" onClick={ () => {
                        // 취소를 눌렀다면
                        if (!confirm('삭제 오라이?')){
                            return; // 함수를 끝내버리깅
                        }
                        // 모든 게시물 배열에서 내 게시물을 제외한 배열을 다시 말듦
                        // 그리고 해당 배열로 상태를 업데이트한다
                        props.setPosts(
                            posts.filter(post=>post.id!==postId)
                        )
                        // 선택된 post Id를 0으로 되돌린다
                        props.setPostId(0);
                    }}>삭제하기</Button>
                    <Button type="button" onClick={ () => {
                        if (!confirm('안돼, 돌아가')){
                            return; // 함수를 끝내버리깅
                        }
                        // 선택된 post Id를 0으로 되돌린다 (Board화면으로 전환)
                        props.setPostId(0);
                    }}>돌아가기</Button>
            </section>
        </>
    );
}
export default Viewer;