/**
 *
 * @authors RaoNeng
 * @date    2018/9/1
 * @description 定义路由模块
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Hello = () => import(/* webpackChunkName: "hello" */ '@views/hello');
const Default = () => import(/* webpackChunkName: "login" */ '@views/default');
const Guide = () => import(/* webpackChunkName: "login" */ '@views/guide');
const Login = () => import(/* webpackChunkName: "login" */ '@views/login');
const FlowPrompt = () => import(/* webpackChunkName: "apply" */ '@views/flowPrompt');
const ApplyLoan = () => import(/* webpackChunkName: "apply" */ '@views/applyLoan');
const IdCard = () => import(/* webpackChunkName: "apply" */ '@views/sign/idCard');
const BankCard = () => import(/* webpackChunkName: "apply" */ '@views/sign/bankCard');
const FaceRecognition = () => import(/* webpackChunkName: "apply" */ '@views/sign/faceRecognition');
const ContractConfirm = () => import(/* webpackChunkName: "apply" */ '@views/contractConfirm');
const PersonInfo = () => import(/* webpackChunkName: "apply" */ '@views/personInfo');

const Verifying = () => import(/* webpackChunkName: "result" */ '@views/verifying');
const VerifyReject = () => import(/* webpackChunkName: "result" */ '@views/verifyReject');
const VerifyPassWait = () => import(/* webpackChunkName: "result" */ '@views/verifyPassWait');
const VerifyPass = () => import(/* webpackChunkName: "result" */ '@views/verifyPass');

const AnswerSurvey = () => import(/* webpackChunkName: "answer" */ '@views/answerSurvey');

const routes = [
  {
    path: '/hello',
    name: 'hello',
    component: Hello
  },
  { // 缺省页
    path: '/default',
    name: 'default',
    component: Default
  },
  { // 引导页
    path: '/guide',
    name: 'guide',
    component: Guide
  },
  { // 登录页
    path: '/login',
    name: 'login',
    component: Login
  },
  { // 流程提示页
    path: '/flowPrompt',
    name: 'flowPrompt',
    component: FlowPrompt
  },
  { // 申请借款页
    path: '/applyLoan',
    name: 'applyLoan',
    component: ApplyLoan
  },
  { // 个人信息补充页
    path: '/personInfo',
    name: 'personInfo',
    component: PersonInfo
  },
  { // 信息填写申请-身份证
    path: '/idCard',
    name: 'idCard',
    component: IdCard
  },
  { // 信息填写申请-银行卡
    path: '/bankCard',
    name: 'bankCard',
    component: BankCard
  },
  { // 信息填写申请-人脸识别
    path: '/faceRecognition',
    name: 'faceRecognition',
    component: FaceRecognition
  },
  { // 合同确认页
    path: '/contractConfirm',
    name: 'contractConfirm',
    component: ContractConfirm
  },
  { // 审核中...页
    path: '/verifying',
    name: 'verifying',
    component: Verifying
  },
  { // 审核未通过页
    path: '/verifyReject',
    name: 'verifyReject',
    component: VerifyReject
  },
  { // 审核通过待放款页
    path: '/verifyPassWait',
    name: 'verifyPassWait',
    component: VerifyPassWait
  },
  { // 审核通过页
    path: '/verifyPass',
    name: 'verifyPass',
    component: VerifyPass
  },

  { // 智能信审-问卷调查
    path: '/answerSurvey',
    name: 'answerSurvey',
    component: AnswerSurvey
  },
  {
    path: '*', redirect: '/guide'
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
