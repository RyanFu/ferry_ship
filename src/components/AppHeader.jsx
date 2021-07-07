import React from 'react';
import { Header, Navbar, Avatar, Nav, Dropdown, Whisper, Popover } from 'rsuite';

export default function AppHeader(props) {
	const { user } = props;
	const triggerRef = React.createRef();

	function handleSelectMenu(eventKey, event) {
		switch (eventKey) {
			case 2:
				__unLogin();
				break;
		}
		triggerRef.current.hide();
	}

	// 注销登陆
	const __unLogin = () => {
		// localStorage.removeItem("user");
		document.cookie = 'u_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
		window.location.href = '/login';
	};

	return (
		<Header>
			<Navbar appearance="inverse" style={{ padding: '0 15px' }}>
				<Navbar.Header justify="center">
					<a className="navbar-brand logo" style={{ textDecoration: 'none' }}>
						<h3 style={{ lineHeight: '56px', color: '#FFFB' }}>Ferry ship 控制台</h3>
					</a>
				</Navbar.Header>
				{user && (
					<Nav pullRight justify="center" style={{ lineHeight: '56px' }}>
						<Whisper
							placement="bottomEnd"
							trigger="click"
							triggerRef={triggerRef}
							speaker={
								<Popover full>
									<Dropdown.Menu onSelect={handleSelectMenu}>
										<Dropdown.Item eventKey={1}>用户管理</Dropdown.Item>
										<Dropdown.Item eventKey={2}>退出登陆</Dropdown.Item>
									</Dropdown.Menu>
								</Popover>
							}
						>
							<Avatar circle>{user?.name}</Avatar>
						</Whisper>
					</Nav>
				)}
			</Navbar>
		</Header>
	);
}
