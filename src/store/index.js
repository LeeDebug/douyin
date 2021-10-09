import * as Vuex from "vuex";
import enums from '../utils/enums'
import api from '../api/index'
import CONST_VAR from "../utils/const_var";

let RELATE_ENUM = {
  FOLLOW_ME: 1,//只关注我
  FOLLOW_EACH_OTHER: 2,//互相关注
  FOLLOW_HE: 3,//我关注他
  REQUEST_FOLLOW: 4//关注请求
}
const store = Vuex.createStore({
  state: {
    bodyHeight: document.body.clientHeight,
    bodyWidth: document.body.clientWidth,
    maskDialog: false,
    maskDialogMode: 'dark',
    version: '17.1.0',
    userinfo: {
      school: {
        name: '中央戏剧学院',
        department: null,
        joinTime: null,
        education: null,
        displayType: enums.DISPLAY_TYPE.ALL,
      },
      "id": "93864497380",
      "unique_id_modify_time": "1630393144",
      "unique_id": "10040050",
      "favoriting_count": 143,
      "avatar": require('../assets/img/icon/avatar/2.png'),
      "city": "成都",
      "province": '四川',
      "country": "中国",
      "birthday": "2002-01-01",
      "cover": "https://p3.douyinpic.com/obj/c8510002be9a3a61aad2?from=116350172",
      "following_count": 66,
      "follower_count": 235000,
      "aweme_count": 1796000,
      "nickname": "我是小睿耶",
      "phone": "",
      "sex": "",
      "last_login_time": "1630423555",
      "create_time": "1630423555",
      "status": 1,
      "desc": `一个普普通通学表演的\n看到的人都能开开心心~~~~~~~~~~~~~`,
      "is_private": 1
    },
    friends: {
      "all": [
        {
          "id": "224e9a00-ffa0-4bc1-bb07-c318c7b02fa5",
          "avatar": require('../assets/img/icon/avatar/1.png'),
          "name": "冒安志",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "234",
          "pinyin": "M",
          "select": false,
          type: RELATE_ENUM.REQUEST_FOLLOW
        },
        {
          "id": "2b446aa8-5d31-429a-8e39-d4705eb4e900",
          "avatar": require('../assets/img/icon/avatar/19.png'),
          "name": "浅唱↘我们的歌",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "33453",
          "pinyin": "Q",
          "select": false,
          type: RELATE_ENUM.FOLLOW_ME
        },
        {
          "id": "2d8622b4-7112-4bc7-a0cf-00a268a85504",
          "avatar": require('../assets/img/icon/avatar/25.png'),
          "name": "‘心’之天空",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "234234",
          "pinyin": "#",
          "select": false,
          type: RELATE_ENUM.FOLLOW_HE
        },
        {
          "id": "2e38900b-65f7-426a-8e8b-edb403df35fb",
          "avatar": require('../assets/img/icon/avatar/18.png'),
          "name": "◇、_保持微笑ゞ",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "1111",
          "pinyin": "#",
          "select": false,
          type: RELATE_ENUM.FOLLOW_EACH_OTHER
        },
        {
          "id": "3cd53cb5-04f8-4439-ad2b-e57b3f9b8c73",
          "avatar": require('../assets/img/icon/avatar/26.png'),
          "name": "好◇°我会Yi直在●",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "sdfs",
          "pinyin": "H",
          "select": false
        },
        {
          "id": "46c77017-9dc6-4a48-bf96-560c6e7db06f",
          "avatar": require('../assets/img/icon/avatar/4.png'),
          "name": "甫韦茹",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "dgfdfg",
          "pinyin": "F",
          "select": false
        },
        {
          "id": "4df770d7-a414-4e02-8f9e-72ebd87eb93e",
          "avatar": require('../assets/img/icon/avatar/12.png'),
          "name": "幸福泡泡",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "df",
          "pinyin": "X",
          "select": false
        },
        {
          "id": "5ebb4d7a-c7ad-43c7-a830-9eb3ee423cb7",
          "avatar": require('../assets/img/icon/avatar/3.png'),
          "name": "蔡傲安",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "ssss",
          "pinyin": "C",
          "select": false
        },
        {
          "id": "7226092d-a2c5-4ffd-98d7-3b7ac814bca3",
          "avatar": require('../assets/img/icon/avatar/16.png'),
          "name": "心若向阳无谓伤悲",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "asdfasd",
          "pinyin": "X",
          "select": false
        },
        {
          "id": "72aef2a9-5573-4205-9288-706e19bccc7f",
          "avatar": require('../assets/img/icon/avatar/10.png'),
          "name": "A倒影着稚嫩的少年",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "wfghdf",
          "pinyin": "#",
          "select": false
        },
        {
          "id": "77c82d2e-9be1-45c2-a733-00445d2e7f2c",
          "avatar": require('../assets/img/icon/avatar/22.png'),
          "name": "一只喵的旅行。",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "sadf",
          "pinyin": "Y",
          "select": false
        },
        {
          "id": "7b30566d-70eb-4a31-ae43-200917269a43",
          "avatar": require('../assets/img/icon/avatar/14.png'),
          "name": "℉阳光下的小情绪",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "asdfa",
          "pinyin": "#",
          "select": false
        },
        {
          "id": "90c6ccd8-0653-4789-9348-28fba06d6ae3",
          "avatar": require('../assets/img/icon/avatar/11.png'),
          "name": "思念一直在",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "as",
          "pinyin": "S",
          "select": false
        },
        {
          "id": "a2c1310f-1a3c-430f-9b7c-557b9ccdd33d",
          "avatar": require('../assets/img/icon/avatar/9.png'),
          "name": "阎韶丽",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "vbvd",
          "pinyin": "Y",
          "select": false
        },
        {
          "id": "a7443b4f-b0fa-4409-a693-5f090aa763ee",
          "avatar": require('../assets/img/icon/avatar/5.png'),
          "name": "马佳婉清",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "sdf",
          "pinyin": "M",
          "select": false
        },
        {
          "id": "b49fd828-f8a7-4be0-a3bc-0a8fa312b2e8",
          "avatar": require('../assets/img/icon/avatar/0.png'),
          "name": "倒影着稚嫩的少年",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "eeee",
          "pinyin": "D",
          "select": false
        },
        {
          "id": "b632bffe-1cfb-408a-8255-b558e2faf49a",
          "avatar": require('../assets/img/icon/avatar/8.png'),
          "name": "买易槐",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "xczxc",
          "pinyin": "M",
          "select": false
        },
        {
          "id": "c01f10dd-a270-42ab-876f-64a8beb22a69",
          "avatar": require('../assets/img/icon/avatar/7.png'),
          "name": "章昊苍",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "gggggggggr",
          "pinyin": "Z",
          "select": false
        },
        {
          "id": "d0bf11a3-a25b-4865-a047-c67de8e8af7b",
          "avatar": require('../assets/img/icon/avatar/2.png'),
          "name": "凌依晨",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "12",
          "pinyin": "L",
          "select": false
        },
        {
          "id": "d300b7a5-115d-41ba-a071-7d1781da331f",
          "avatar": require('../assets/img/icon/avatar/23.png'),
          "name": "为你锁住心",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "1629993515",
          "pinyin": "W",
          "select": false
        },
        {
          "id": "deceba30-80fc-45c2-bd56-8d65091bb104",
          "avatar": require('../assets/img/icon/avatar/13.png'),
          "name": "原味青春",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "werwe",
          "pinyin": "Y",
          "select": false
        },
        {
          "id": "e0c3d20d-5978-4339-962f-cffc6e29aff1",
          "avatar": require('../assets/img/icon/avatar/24.png'),
          "name": "一起走过的日子°",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "dfgdfg",
          "pinyin": "Y",
          "select": false
        },
        {
          "id": "e1fb6274-10fa-4d50-b9b1-6eefacfc2341",
          "avatar": require('../assets/img/icon/avatar/15.png'),
          "name": "看，熟悉旳风景",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "aasdasd",
          "pinyin": "K",
          "select": false
        },
        {
          "id": "eab1ef9b-70e6-4249-8d78-b4f6e1b0cb08",
          "avatar": require('../assets/img/icon/avatar/20.png'),
          "name": "dear°学会微笑",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "gggggg",
          "pinyin": "#",
          "select": false
        },
        {
          "id": "ecb405e2-d057-4c85-a12b-a5fe9a7b8a05",
          "avatar": require('../assets/img/icon/avatar/6.png'),
          "name": "富察昕昕",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "ghjg",
          "pinyin": "F",
          "select": false
        },
        {
          "id": "f09652a3-d6e1-4517-a15e-583a24a250e1",
          "avatar": require('../assets/img/icon/avatar/17.png'),
          "name": "蓝天下的迷彩?",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "yhjh",
          "pinyin": "L",
          "select": false
        },
        {
          "id": "f676cc30-cc81-487a-9450-cbb1f3c5cde8",
          "avatar": require('../assets/img/icon/avatar/21.png'),
          "name": "伱的微笑",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "ghj",
          "pinyin": "N",
          "select": false
        }
      ],
      "recent": [
        {
          "id": "3cd53cb5-04f8-4439-ad2b-e57b3f9b8c73",
          "avatar": require('../assets/img/icon/avatar/26.png'),
          "name": "好◇°我会Yi直在●",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "sdfs",
          "pinyin": "H",
          "select": false
        },
        {
          "id": "77c82d2e-9be1-45c2-a733-00445d2e7f2c",
          "avatar": require('../assets/img/icon/avatar/22.png'),
          "name": "一只喵的旅行。",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "sadf",
          "pinyin": "Y",
          "select": false
        }
      ],
      "eachOther": [
        {
          "id": "2b446aa8-5d31-429a-8e39-d4705eb4e900",
          "avatar": require('../assets/img/icon/avatar/19.png'),
          "name": "浅唱↘我们的歌",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "33453",
          "pinyin": "Q",
          "select": false
        },
        {
          "id": "eab1ef9b-70e6-4249-8d78-b4f6e1b0cb08",
          "avatar": require('../assets/img/icon/avatar/20.png'),
          "name": "dear°学会微笑",
          "sex": "",
          "age": null,
          "idCard": null,
          "phone": "",
          "address": null,
          "wechat": "",
          "password": null,
          "lastLoginTime": "1629993515",
          "createTime": "1630035089",
          "isDelete": 0,
          "account": "gggggg",
          "pinyin": "#",
          "select": false
        }
      ]
    }
  },
  mutations: {
    setUserinfo(store, val) {
      store.userinfo = val
    },
    setFriends(store, val) {
      store.friends = val
    },
    setMaskDialog(store, val) {
      store.maskDialog = val.state
      if (val.mode) {
        store.maskDialogMode = val.mode
      }
    }
  },
  actions: {
    async getFriends(context) {
      let res = await api.user.friends()
      if (res.code === CONST_VAR.SUCCESS) {
        context.commit('setFriends', res.data)
      }
    }
  }
})

export default store