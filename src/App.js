import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { 
	Layout,
	Menu,
	Icon,
	Breadcrumb,
} from 'antd';

import './scss/App.css';
import myLogo from './assets/images/minholee_logo.png';

import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';

class App extends Component {
	state = {
		collapsed: true,
	};
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	render() {
		const { Header, Footer, Sider, Content } = Layout;
		const { Item } = Menu;

		return (
			<div>
				
				<Layout style={{minHeight: '100vh'}}>
					
					<Sider
						collapsible
						collapsed={this.state.collapsed}
						onCollapse={this.toggle}
					> 
						<div className='logo'>
							<img src={myLogo} alt='logo' style={{height: '64px'}} />
						</div>
						<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
							<Item key='1'>
								<Link to='/'>
									<Icon type='home' />
									<span> Home </span>
								</Link>
							</Item>
							<Item key='2'>
								<Link to='/about'>
									<Icon type='user' />
									<span> About Myself </span>
								</Link>
							</Item>
							<Item key='3'>
								<Link to='/projects'>
									<Icon type='code' />
									<span> Projects </span>
								</Link>
							</Item>
						</Menu>
					</Sider>

					<Layout>
						<Header>
							
						</Header>
						<Content>
							<Router history={hashHistory}>
								<Route path='/about' render={() => 
									<div>
										<About/> 
										<Projects/>
									</div>
								} />
								<Route path='/projects' component={Projects} />
								<Route path='/' render={() => 
									<div>
										<About/> 
										<Projects/>
									</div>
								} />
							</Router>
						</Content>
					</Layout>
				</Layout>
				
			</div>	
		);
	}
}

export default App;
