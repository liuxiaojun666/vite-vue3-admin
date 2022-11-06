/**
 * 接口代理地址配置文件
 */
const proxyTargets = {
  prod_aaa: 'http://aaa.abc.top',
  prod_bbb: '',
  prod_ccc: 'http://bbb.abc.top',
  prod_ddd: 'http://ccc.abc.top', // 苏州线上环境
  test_179: 'http://10.100.3.204:8080',
  test_189: 'http://192.168.237.189:8080',
  test_188: 'http://192.168.237.188:8098',
  test_204: '',
  test_205: 'http://10.100.3.205:8080',
  test_206: 'http://10.100.3.206:8071',
  test_207: 'http://10.100.3.207:8080',
  test_208: 'http://10.100.3.208:8071',
  test_209: 'http://10.100.3.209:8080',
  dev_hanlei: 'http://192.168.241.67:8118',
  dev_libingyin: '',
  mock_11: 'http://10.100.3.208:3001/mock/11/',
}

export default proxyTargets
