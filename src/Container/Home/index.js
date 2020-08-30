import React, {Component} from 'react'
import Header from '../../Component/HomePage/Header/header'
import UserList from '../../Component/HomePage/UserCard/userCard'
import {Modal} from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './index.css'
import ActivityLogs from '../../Component/HomePage/ActivityLogs/activitylogs'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {getAllUserData} from './actions'
import {selectUserData} from './selector'
import moment from 'moment'



const modalStyles = {
    modal: {
        minWidth: '58%',
        minHeight:'500px',
        borderRadius: 4,
        maxHeight: '96%',
        padding:0,
        paddingLeft: '20px'
    },
    closeIcon:{
        top: 21,
    },
    overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
    }
}


class HomePage extends  Component {
    constructor (props) {
		super(props)
		this.state = {
			isOpenActivityModal: false,
			activityList: [],
			userList : [],
			filterList: [],
			startDate : moment(),
			isDatePickerOpen: false
	}
}


    openActivityModal = (user_id) => {

        let activityList = this.state.userList.filter((item) => item.id === user_id)
        
        this.setState({isOpenActivityModal: !this.state.isOpenActivityModal, activityList: activityList[0].activity_periods, filterActivityList: activityList[0].activity_periods})
    }

    closeActivityModal = () => {
        this.setState({isOpenActivityModal: false})
	}
	
	componentDidMount = () => {
           this.props.getAllUserData()
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.userList.length > 0) {
			this.setState({userList: nextProps.userList, filterList: nextProps.userList})
		}
	}

	handleChangeDate = (e, data) => {

		console.log(e, data, 'applieddate', moment(e).format("MMM Do YY"), moment(data[0].start_time).format("MMM Do YY"))

		let activityList = data.filter((item) => moment(item.start_time).format("MMM Do YY") === moment(e).format("MMM Do YY"))
		this.setState({activityList: activityList, startDate: moment(e), isDatePickerOpen: !this.state.isDatePickerOpen})

	}

	handleSearchName = (e) => {
		let userList = this.state.filterList.filter((item) => item.real_name.toLowerCase().search(e.target.value.replace(/\\/g, "\\\\").toLowerCase()) !== -1)

		this.setState({userList: userList})

	}

	handleClick = () => {
		this.setState({isDatePickerOpen: !this.state.isDatePickerOpen})
	}


    render(){
        console.log(this.state, 'activitystate', this.state.isOpenActivityModal,this.props)
        return (
            <div>
               <div>
                <Header handleSearchName = {this.handleSearchName}/>
                </div>
              <div className="userlist-main">
              {
               this.state.userList.map((item, i) =>
               <div key={i} className = "usercard" >
                   <UserList  userList={item} openActivityModal={this.openActivityModal}/>
                </div>)  
                }
              </div>
           
              <Modal
                   
                    center
                    styles={modalStyles}
                    showCloseIcon={true}
                    open={this.state.isOpenActivityModal}
                    closeOnOverlayClick={false}
                    onClose={this.closeActivityModal}
                    closeOnEsc={true}>
					<ActivityLogs filterActivityList={this.state.filterActivityList} activityList={this.state.activityList} startDate = {this.state.startDate} handleChangeDate={this.handleChangeDate} isDatePickerOpen={this.state.isDatePickerOpen} handleClick={this.handleClick}/>	

                </Modal>

            </div>
           

        )

        
    }



}

const mapStateToProps = createStructuredSelector({
	userList: selectUserData()
})

const mapDispatchToProps = (dispatch) => {
	return {
        getAllUserData : () => {
			dispatch(getAllUserData())
		}
	}
}

export default (connect(mapStateToProps, mapDispatchToProps)(HomePage)) 

