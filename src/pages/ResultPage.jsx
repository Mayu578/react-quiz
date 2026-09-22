import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const"
import Result from "../components/Display/Result/Result";
import Loading from "../components/Loading/Loading";
import { useState,useEffect } from "react"

export default function ResultPage() {
  const [active,setActive] = useState(false);
  const location = useLocation(); //荷物を受け取る窓口
  const maxQuizLen = location.state.maxQuizLen //荷物の中身を取り出す
  const correctNumLen = location.state.correctNumLen //荷物の中身を取り出す


  useEffect(() => {
    setTimeout(() => {setActive(true)},3000);
  },[])

  return (
    <>
      <h1>Result</h1>
      <Loading active={active} /> 
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen}></Result>
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  )
}

