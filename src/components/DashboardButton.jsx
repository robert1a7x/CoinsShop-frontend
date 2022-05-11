import React from 'react';
import { Link } from 'react-router-dom';

const DashboardButton = () => {
	return (
		<div>
			<Link
				className="dashboard-button"
				to="/dashboard"
			>
				Admin Dashboard
			</Link>
		</div>
	)
}

export default DashboardButton