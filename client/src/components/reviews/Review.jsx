import React from "react"
import classes from "../../styles/reviews.module.css"
import ShowMoreComponent from "./ShowMore"
import InfoComponent from "./OrganizationInfo"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth/AuthProvider";
import DeleteButton from "./DeleteButtonComponent";

const ReviewComponent = React.memo(function ReviewComponent(props) {
    const authContext = useAuth();
    const truncate = (text) => {
        return text.length > 20 ? 
            text.substring(0, 17) + "..." :
            text;

    }
    
    return (
        
        <div className={classes.review_item}>
            <InfoComponent info={props}/>
            <div>
                <h3>{props.owner_name}</h3>
                <h4 className={classes.review_text} >{truncate(props.text)}</h4>
                <h4>{props.rate} </h4>
            </div>
            <div>
                <Link to={'/review/' + props._id}>
                    <ShowMoreComponent/>
                </Link>
                <br/>
                <br/>
                {
                    authContext.user === null ? null : 
                        authContext.user._id === props.owner || authContext.user.isAdmin ?
                            <DeleteButton id={props._id} /> : null
                }
            </div>
            
        </div>
    )
});

export default ReviewComponent;
