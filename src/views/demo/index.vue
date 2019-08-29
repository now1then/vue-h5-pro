<template>
  <section class="page-demo">
    <Header showLeft showRight fixed @handle-left="goBack"></Header>
    <div class="page-content header-fixed">
      <h1 style="text-align:center;">demo页面</h1>
      <p>1*1</p>
      <p>1*2</p>
      <p>1*3</p>
      <p>1*4</p>
      <p>1*5</p>
      <p>1*6</p>
      <p>1*7</p>
      <p>1*8</p>
      <p>1*9</p>
      <p>1*10</p>
      <p>1*11</p>
      <p>1*12</p>
      <p>1*13</p>
      <p>1*14</p>
      <p>1*15</p>
      <p>1*16</p>
      <p>1*17</p>
      <p>1*18</p>
      <p>1*19</p>
      <p>1*20</p>
      <p>1*21</p>
      <p>1*22</p>
      <p>1*23</p>
      <p>1*24</p>
      <p>1*25</p>
      <p>1*26</p>
      <p>1*27</p>
      <p>1*28</p>
      <p>1*29</p>
      <p>1*30</p>
      <p>1*31</p>
      <p>1*32</p>
      <p>1*33</p>
      <p>1*34</p>
      <p>1*35</p>
      <p>1*36</p>
      <p>1*37</p>
      <p>1*38</p>
      <p>1*39</p>
      <p>1*40</p>
      <p>1*41</p>
      <p>1*42</p>
      <p>1*43</p>
      <p>1*44</p>
      <p>1*45</p>
      <p>1*46</p>
      <p>1*47</p>
      <p>1*48</p>
      <p>1*49</p>
      <p>1*50</p>
      <p>1*51</p>
      <p>1*52</p>
      <p>1*53</p>
      <p>1*54</p>
      <p>1*55</p>
      <p>1*56</p>
      <p>1*57</p>
      <p>1*58</p>
      <p>1*59</p>
      <p>1*60</p>
      <p>1*61</p>
      <p>1*62</p>
      <p>1*63</p>
      <p>1*64</p>
      <p>1*65</p>
      <p>1*66</p>
      <p>1*67</p>
      <p>1*68</p>
      <p>1*69</p>
      <p>1*70</p>
      <p>1*71</p>
      <p>1*72</p>
      <p>1*73</p>
      <p>1*74</p>
      <p>1*75</p>
      <p>1*76</p>
      <p>1*77</p>
      <p>1*78</p>
      <p>1*79</p>
      <p>1*80</p>
      <p>1*81</p>
      <p>1*82</p>
      <p>1*83</p>
      <p>1*84</p>
      <p>1*85</p>
      <p>1*86</p>
      <p>1*87</p>
      <p>1*88</p>
      <p>1*89</p>
      <p>1*90</p>
      <p>1*91</p>
      <p>1*92</p>
      <p>1*93</p>
      <p>1*94</p>
      <p>1*95</p>
      <p>1*96</p>
      <p>1*97</p>
      <p>1*98</p>
      <p>1*99</p>
      <p>1*100</p>
      <MainButton />
    </div>
  </section>
</template>

<script>
import { formatDate } from '@/utils/cloud-utils';
import MainButton from '@/component_basics/MainButton';
import Header from '@/component_basics/Header';
import transferDom from '@/directives/transferDom';

export default {
  name: 'page-demo',
  components: { // 组件
    MainButton,
    Header,
  },
  directives: {
    // 指令
    transferDom
  },
  filters: {
    // 过滤器
    formatDate
  },
  data() {
    return {
      title: '测试'
    };
  },
  methods: {
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" >
.page-demo {
  text-align: left;
  .common-btns {
    position: fixed;
    bottom: 0;
  }
}
</style>
