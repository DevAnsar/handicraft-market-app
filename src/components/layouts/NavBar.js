import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import './../../styles/navbar.css';
import {Navbar,NavItem,Icon,Divider,SideNavItem,Dropdown} from 'react-materialize';
// import {getCategoriesApi} from './../../apis/index';
// import {toast} from 'react-hot-toast';
import {useData} from './../../providers/IndexProvider'
function NabBar(){

  const {categories}=useData();

  // useEffect(()=>{

  //   getCategoriesApi().then(res=>{
  //     let {status,data,message}=res;
  //     if(!status){toast.error(message)};

  //     console.log('categories',data)
  //     setCategories(data.data)
  //   }).catch(err=>{console.log(err)})
  // },[]);

  return(
    <Navbar
      alignLinks="right"
      brand={<Link className="brand-logo" to="/">Logo</Link>}
      id="main-navbar"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'right',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
      style={{backgroundColor:'rgba(242,98,98,0.8)'}}
      centerChildren={true}
      fixed={true}
      sidenav={
        <>
        <SideNavItem
          user={{
            background: './images/office.jpg',
            email: 'ansarmirzayi@gmail.com',
            image: './images/ansarmirzayi.jpg',
            name: 'Ansar Mirzayi'
          }}
          userView
        />
        <div className='sidenav-content' style={{minHeight:"100%"}}>
          <SideNavItem href='/asdasdasd'>
            <Link className="text-color row-center" to='/categories'>
            {/* short_text */}
            <Icon style={{marginRight:"0",marginLeft:"10px"}}>format_align_right</Icon>
            دسته بندی ها
            </Link>
          </SideNavItem>

          <SideNavItem href="/products">
            <Link className="text-color row-center" to='/products'>
            <Icon style={{marginRight:"0",marginLeft:"10px"}}>store</Icon>
            محصولات
            </Link>
          </SideNavItem>
      
          <SideNavItem subheader>
            <Link className="text-color row-center" to='/products'>
            <Icon style={{marginRight:"0",marginLeft:"10px"}}>sentiment_very_satisfied</Icon>
              درباره ما
              </Link>
          </SideNavItem>

          <SideNavItem divider />
          
          <SideNavItem >
            <div className="row-center start ">
              <a className="text-color">
                 <ThemeSwitcher />
                 حالت تاریک
              </a>
            </div>
          </SideNavItem>
      </div>
      </>
      }
    >
      <NavItem className='text-color row-center'>
        
            <ThemeSwitcher />
            حالت تاریک
      </NavItem>
      <NavItem >
        <Link to='/about' className='text-color row-center'>
        درباره ما و ارتباط

        </Link>
        
      </NavItem>
      <NavItem  >
      <Dropdown
          id="Dropdown_16"
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }}
          
          trigger={<div>محصولات{' '}<Icon right>arrow_drop_down</Icon></div>}
          children={
            <ul className="dropdown-box">
              <li className="dropdown-item">
                <Link to="/">
                آخرین تولیدات ما
                  </Link>
              </li>
              <Divider />
              <li  className="dropdown-item">
                <Link to="/">
                  محبوب ترین ها
                </Link>
              </li>
  
                <Divider />
    
              <li  className="dropdown-item">
                <Link to="/">
            پربازدید ها
                </Link>
              </li>
          </ul>
          }
        >
      
        </Dropdown>
      </NavItem>
      <NavItem style={{marginRight:'40px'}}>
        <Dropdown
          id="Dropdown_14"
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }}
          
          trigger={<div>دسته بندی{' '}<Icon right>arrow_drop_down</Icon></div>}
          children={
            <ul className="dropdown-box">
              {
                categories?.map(category=>(
                  <li key={category.id} className="dropdown-item">
                  <Link to={`/products?category=${category.slug}`}>
                  
                      {
                        category.title
                      }
                    </Link>
                </li>
                ))
              }
          </ul>
          }
        >
      
        </Dropdown>
      </NavItem>
</Navbar>
  )
    
}

export default NabBar;