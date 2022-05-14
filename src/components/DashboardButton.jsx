import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/DashboardButton.css'

const DashboardButton = () => {
	return (
		<div className="dasboard-container">
			<div className="dashboard-button">
				<Link
					to="/dashboard"
				>
					Admin Dashboard
				</Link>
			</div>
		</div>
	)
}

export default DashboardButton