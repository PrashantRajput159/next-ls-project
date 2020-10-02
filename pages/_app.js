import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import "../scss/main.scss"

class MyApp extends App {
	render(){
		const {Component, pageProps} = this.props;
		return (
			<Provider store={store}>
				<Header/>
				<Component {...pageProps}></Component>
				<Footer/>
			</Provider>
		)
	}
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);