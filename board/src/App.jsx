import './App.css'
import Post from "@/components/board/Post.jsx";
import Board from "@/components/board/board.jsx";
import {useState} from "react";
import Viewer from "@/components/board/Viewer.jsx";

function create_init_board_data(){
    return[
        {
            id:1,
            title:'안녕하세요',
            writer:'moba',
            wroteAt:'2000.02.02',
            content: '안녕하세요. 문의사항 있습니다요~',
            viewCount:14,
        },
        {
            id:2,
            title:'적당히 바람이 시원해',
            writer:'moba',
            wroteAt:'2000.02.02',
            content: '기분이 너무 좋아요 유후~~',
            viewCount:14,
        },
    ]
}


function App() {
    // 내가 현재 보고있는 게시물 번호에 대한 상태를 관리 -> 0번 게시물을 보고 있음
    const [postId, setPostId]=useState(0);
    // 미리 작성되어 있는 게시물 내용들을 만들어 온다
    const [posts,setPosts] = useState(create_init_board_data());
    // 총 게시ㅣ물 개수 상태를 관리하는 카운트 변수 === 실제 게시물 아이디
    const [postCount,setPostCount] = useState(posts.length);


    // postId가 [음수(-1)/0/양수] 에 따라 아래 컴포넌트를 선택
    let show = null;
    switch (postId) {
        case -1:
            show = <Post
                    posts={posts}
                    setPosts={setPosts}
                    setPostId={setPostId}
                    postCount={postCount}
                    setPostCount={setPostCount}
            />
            break;
        case 0:
            // 생성된 게시물 내용들로 게시판을 생성하도록 posts 전달
            show = <Board posts={posts} setPostId={setPostId} />
            break;
        default:
            // 현재 선택된 게시물의 객체를 viewer에 전달한다.
            // 현재 선택된 게시물의 객체를 post에 전달한다
            show = <Viewer
                    post={posts}
                    setPosts={setPosts}
                    postId={postId}
                    setPostId={setPostId}
            />
    }


    return (
      <>
          {show}
      </>
  )
}

export default App;
