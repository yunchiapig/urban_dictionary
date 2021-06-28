import { gql } from '@apollo/client';

const MUT_USER_LOGIN=gql`
mutation asUserLogin($name:String!, $email:String!){
  userLogin(
    name: $name
    email: $email
  ){
    _id
    name
    email
    penName
  }
}
`;

const MUT_MODIFY_PEN_NAME=gql`mutation ModifyPen($email: String!, $pen:String!){
	modifyPenName(
	  email: $email
	  penName: $pen
	){
	  success
	  message
	}
  }`
  ;

const MUT_CREATE_POST = gql`
	mutation createPost(
		$email: String!
		$vocabulary: String!
		$explanation: String!
		$example: String!
		$tags: [String]
	){
		createPost(
			email: $email
			vocabulary: $vocabulary
			explanation: $explanation
			example: $example
			tags: $tags
		){
			_id
			# author{
			# 	penName
			# }
			vocabulary
			explanation
			example
			tags
			if_publish
			agree_users
			disagree_users
			create_date
		}
	}
`;

const MUT_MODIFY_POST="";

const MUT_UNPUBLISH_POST=gql`
mutation UnpublishPost($ptid : String!){
	unpublishPost(
	  post_id : $ptid
	){
	  success
	  message
	}
  }
  `;

const MUT_PUBLISH_POST=gql`
mutation PublishPost($ptid : String!){
	publishPost(
	  post_id : $ptid
	){
	  success
	  message
	}
  }
  `;

const MUT_ADD_AGREE="";

const MUT_ADD_DISAGREE="";

const MUT_DELETE_VOCAB="";

export {MUT_USER_LOGIN,
		MUT_MODIFY_PEN_NAME,
		MUT_CREATE_POST,
		MUT_MODIFY_POST,
		MUT_UNPUBLISH_POST,
		MUT_PUBLISH_POST,
		MUT_ADD_AGREE,
		MUT_ADD_DISAGREE,
		MUT_DELETE_VOCAB
		};
