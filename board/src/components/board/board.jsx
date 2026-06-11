import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Button} from "@/components/ui/button.jsx";

function Board(props) {
    const posts = props.posts;
    const rows = [];
    for (let i = posts.length - 1; i >= 0; i--) {
        const post = posts[i];
        rows.push(
            <TableRow>
                <TableCell>{posts.length - i}</TableCell>
                <TableCell>
                    <a href="#" onClick={ (event) => {
                        event.preventDefault();
                        post.viewCount++;
                        props.setPostId(post.id);
                    }}>
                        {post.title}
                    </a>
                </TableCell>
                <TableCell>{post.writer}</TableCell>
                <TableCell>{post.wroteAt}</TableCell>
                <TableCell>{post.viewCount}</TableCell>
            </TableRow>
        );
    }

    return(
        <>
            <Table>
                <TableCaption className="caption-top">문의 게시판</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>번호</TableHead>
                        <TableHead>제목</TableHead>
                        <TableHead>작성자</TableHead>
                        <TableHead>작성일자</TableHead>
                        <TableHead>조회수</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
            <div className="text-right">
                <Button onClick={() => {
                    props.setPostId(-1);
                }}>문의하기</Button>
            </div>
        </>
    );
}
export default Board;