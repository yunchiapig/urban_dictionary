import React from 'react';
import {Typography} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import { Space, Input, Button } from 'antd';

const Card=({vocalbulary,author,explanation,example,tags,agree_users,disagree_users,create_date})=>{
	let pen=(author.penName)?author.penName:author.name;
	return (
		<div className="card">
			<div className="tags">#tag1 #tag2</div>
			<div className="vocab">
				<a className="word">{vocalbulary}</a>
			</div>
			<div className="meaning">{explanation}</div>
			<div className="example">{example}</div>
			<div className="author"> </div>
			<div className="card-footer"> 
				<Button >
					<Space size={4}> 
						<ThumbUp color="primary" />
						<Typography variant="button" display="block" gutterBottom >{agree_users.length}</Typography>
					</Space>
				</Button>
				<Button >
					<Space size={4}> 
						<ThumbDown color="primary" />
						<Typography variant="button" display="block" gutterBottom >{disagree_users.length}</Typography>
					</Space>
				</Button>
			</div>
			<div className="card-footer" > 
				<div style={{fontWeight:"bold", textAlign:"right", paddingBottom:"1rem"}}> by {pen}. {create_date}</div>
			</div>
		</div>
	);
}

export default Card;