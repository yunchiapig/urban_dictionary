import React, { useEffect, useState} from "react";
import { NavLink, Switch, Route, Redirect,useLocation } from "react-router-dom";
import GoogleBtn from "../Components/GoogleBtn"
import Cards from "../Containers/Cards";
import icon from "../imgs/icon.png";
import {Typography, Button} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import { Space, Input } from 'antd';
import {useQuery} from '@apollo/react-hooks'
import {QUE_RANDOM_FIVE_POSTS} from "../graphql/index";

const Home=()=>{
	const [List, setList] = useState([]);
	const check = useLocation();
	console.log("check",check);
	const {loading,error,data}=useQuery(QUE_RANDOM_FIVE_POSTS,{variables: {number: 0}, fetchPolicy: "cache-and-network"});
	useEffect(()=>{
		if(data) setList(data.randomFivePosts);
		return(()=>{
			console.log('home unmouted')
		})
	},[data]);
	//refetch();
	console.log("data",data);
	console.log("error",error);
	console.log("loading",loading);
	if(!data){
		return(
			<div id="content">
				<p>loading...</p>
			</div>
		)
	}
	return(
		<div id="content">
			<Cards data={List}/>
		</div>
	)
}

export default Home;

// const Home=()=>{
// 	const [searchWord,setSearchWord]=useState("");
// 	const [searchAuthor, setSearchAuthor]=useState("");
	
// 	return (
// 		<>
// 			{/* <div className="header">
// 				<div className="row-title">
// 					<button className="homeBtn">
// 						<NavLink className="homeBtn" to="/home"><img id="icon" src={icon} /></NavLink>
// 					</button>
// 					<div className="row-title-bottons" >
// 						<Space size={18}>
// 							<NavLink to="/add"><Button className="botton">新增單字</Button></NavLink> 
// 							<NavLink className="botton" to={{pathname:"/User", state:{id:100, name:userName, isLogined:isLogin}}}><Button className="botton">應該會變成使用者名稱</Button></NavLink> 
// 							<GoogleBtn className="botton" login={login} logout={logout} isLogined={isLogin}></GoogleBtn>
// 						</Space>
// 					</div>
// 				</div>
// 				<div className="row-bar" >
// 					<Input.Search
// 						style={{ width: "100%"}} 
// 						placeholder="敬愛的網友，想探聽點什麼？"
// 						allowClear
// 						enterButton="搜尋"
// 						size="large"
// 						// onSearch={}
// 					/>
// 				</div>
// 			</div> */}
// 			<div id="content">
// 				<Cards mode={"random"}/>
// 			 </div>
// 			{/*<div className="footer" /> */}
// 		</>
// 	);
// }

// export default Home;
// // export default class Home extends Component{
// // 	render(){
// // 		return (
// // 			<div>
// // 				<button>
// // 					<NavLink to="/home">Home</NavLink>
// // 				</button>
// // 				// <button>
// // 				// 	<NavLink to="/login">Log In</NavLink>
// // 				// </button>
// // 				<GoogleBtn/>
// // 				<button>
// // 					<NavLink to="/add">Add</NavLink>
// // 				</button>
// // 				<button>
// // 					<NavLink to="/user">User</NavLink>
// // 				</button>
// // 				<input type="search"/>
// // 				<button>
// // 					<NavLink to="/search">Search</NavLink>
// // 				</button>
// // 				<input type="search"/>
// // 				<button>
// // 					<NavLink to="/author">Author</NavLink>
// // 				</button>
// // 				<hr />
// // 				<Switch>
// // 					<Route path="/login" component={LogIn} />
// // 					<Route path="/add" component={Add} />
// // 					<Route path="/user" component={User} />
// // 					<Route path="/search" component={Search} />
// // 					<Route path="/author" component={Author} />
// // 					<Redirect from="/home" to="/" />
// // 				</Switch>
// // 			</div>
// // 		);
// // 	}
// // }
// {/* <button>
// <NavLink to="/home">Home</NavLink>
// </button>
// // <button>
// // 	<NavLink to="/login">Log In</NavLink>
// // </button>
// <GoogleBtn/>
// <button>
// <NavLink to="/add">Add</NavLink>
// </button>
// <button>
// <NavLink to={{pathname:"/user", state: { fromDashboard: true }}} >User</NavLink>
// </button>
// <Input.Search
// placeholder="Enter the author"
// value={searchAuthor}
// enterButton="Search"
// onChange={(e)=>{setSearchAuthor(e.target.value)}}
// ></Input.Search>

// <hr /> */}