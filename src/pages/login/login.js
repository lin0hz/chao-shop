import React, { Component } from 'react'
import './login.css'
import logo from '../../assets/img/login_logo.png'

import { Form, Input,Checkbox,Button } from 'element-react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                mobile: '',
                code: '',
                checked: false
            },
            isLoading:false,
            rules: {
                mobile: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    {
                        pattern: /^(13[0-9]|14[57]|15[0-9]|17[067]|18[0-9])\d{8}$/,
                        message: "请输入正确的11位手机号",
                        trigger: "blur"
                    }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    {
                        pattern: /^\d{6}$/,
                        message: "请输入正确的6位验证码",
                        trigger: "blur"
                    }
                ],
                checked: [
                    {
                        pattern: /true/,
                        message: "必须勾选同意",
                        trigger: "click"
                    }
                ]
            }
        }
    }
    handleSubmit(e) {
        e.preventDefault(); 
        this.refs.form.validate(async(valid) => {
          if (valid) {
            let oRes = await this.axios.post('/mp/v1_0/authorizations',this.state.form);
            console.log(oRes);
            if(oRes.status===201){
                this.props.history.push('/home')
                window.localStorage.setItem('chao_token',JSON.stringify(oRes.data.data))
            }
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      };
      onChange(key, value) {
        this.setState({
          form: Object.assign({}, this.state.form, { [key]: value })
        });
      }
      
    render() {
        return (
            <div className="login_wrap">
                <div className="login_box">
                    <div className="login_header">
                        <img src={logo} />
                    </div>
                     <Form ref="form" model={this.state.form} rules={this.state.rules} className="demo-ruleForm">
                    <Form.Item prop="mobile">
                        <Input value={this.state.form.mobile} onChange={this.onChange.bind(this, 'mobile')}></Input>
                    </Form.Item>
                    <Form.Item prop="code">
                        <Input value={this.state.form.code} onChange={this.onChange.bind(this, 'code')}></Input>
                    </Form.Item>
                    <Form.Item prop="checked">
                        <Checkbox checked={this.state.form.checked}onChange={this.onChange.bind(this, 'checked')}><span>
                            我已阅读并同意
                            <a href="javascript:void(0)">用户协议</a>和
                            <a href="javascript:void(0)">隐私条款</a>
                          </span>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" onClick={this.handleSubmit.bind(this)} className="login_btn">立即登录</Button>
                    </Form.Item>
                </Form>
                </div>
               
            </div>
        )
    }
}
export default Login