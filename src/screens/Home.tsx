import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;
const BookList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Book = styled.li`
  background-color: grey;
  border-radius: 15px;
`;

const Grid = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
  margin: 0 10px;
`;

interface BookInterface {
  itemId: number;
  title: string;
  author: string;
  isbn: string;
  cover: string;
}
function Home() {
  //카카오 API
  // fetch("https://dapi.kakao.com/v3/search/book?target=title&query=가", {
  //   headers: {
  //     Authorization: `KakaoAK ${REST_API_KEY}`,
  //   },
  // })
  // .then((response) => response.json())
  //   .then((json) => {
  //     // 받은 json으로 기능 구현
  //     console.log(json);
  //   });

  // 네이버 API
  // fetch("/v1/search/book.json?query=미움&display=10&start=1", {
  //   method: "GET",
  //   headers: {
  //     "X-Naver-Client-Id": "",
  //     "X-Naver-Client-Secret": "",
  //   },
  // })
  // .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //   });
  const [books, setBooks] = useState<BookInterface[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "/ttb/api/ItemList.aspx?ttbkey=&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101"
      );
      const json = await response.json();
      setBooks(json.item);
    })();
  }, []);

  return (
    <Container>
      <Title>Alexandria</Title>
      <BookList>
        {books.map((book) => (
          <Book key={book.itemId}>
            <img src={book.cover} />
            {book.title}
          </Book>
        ))}
      </BookList>
      <Grid>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Grid>
    </Container>
  );
}

export default Home;
