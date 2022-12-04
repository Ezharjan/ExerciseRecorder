let rvList = []
try {
    // 如果本地列表中有回顾列表则从本地列表中取出
    if (localStorage.reviewList) {
        rvList = JSON.parse(localStorage.reviewList)
    }
} catch (e) { }

const state = {
    menu: [
        {
            "type": "胸",
            "detail": [
                {
                    "name": "杠铃卧推",
                    "Selected": false
                },
                {
                    "name": "哑铃卧推",
                    "Selected": false
                },
                {
                    "name": "器械推胸",
                    "Selected": false
                },
                {
                    "name": "史密斯机卧推",
                    "Selected": false
                },
                {
                    "name": "上斜哑铃卧推",
                    "Selected": false
                },
                {
                    "name": "哑铃飞鸟",
                    "Selected": false
                },
                {
                    "name": "器械飞鸟",
                    "Selected": false
                },
                {
                    "name": "十字夹胸",
                    "Selected": false
                },
                {
                    "name": "双杠臂屈伸",
                    "Selected": false
                }
            ]
        },
        {
            "type": "背",
            "detail": [
                {
                    "name": "单臂哑铃划船",
                    "Selected": false
                },
                {
                    "name": "绳索划船",
                    "Selected": false
                },
                {
                    "name": "单臂器械划船",
                    "Selected": false
                },
                {
                    "name": "史密斯划船",
                    "Selected": false
                },
                {
                    "name": "硬拉",
                    "Selected": false
                },
                {
                    "name": "高位下拉",
                    "Selected": false
                },
                {
                    "name": "窄距下拉",
                    "Selected": false
                },
                {
                    "name": "杠铃划船",
                    "Selected": false
                }
            ]
        },
        {
            "type": "腿",
            "detail": [
                {
                    "name": "深蹲",
                    "Selected": false
                },
                {
                    "name": "史密斯机深蹲",
                    "Selected": false
                },
                {
                    "name": "坐姿踢腿",
                    "Selected": false
                },
                {
                    "name": "器械倒蹬",
                    "Selected": false
                },
                {
                    "name": "箭步走",
                    "Selected": false
                }
            ]
        },
        {
            "type": "肩",
            "detail": [
                {
                    "name": "哑铃推举",
                    "Selected": false
                },
                {
                    "name": "侧平举",
                    "Selected": false
                },
                {
                    "name": "前平举",
                    "Selected": false
                },
                {
                    "name": "俯身飞鸟",
                    "Selected": false
                },
                {
                    "name": "器械坐姿推举",
                    "Selected": false
                }
            ]
        },
        {
            "type": "二头",
            "detail": [
                {
                    "name": "哑铃双边弯举",
                    "Selected": false
                },
                {
                    "name": "哑铃单边弯举",
                    "Selected": false
                }, {
                    "name": "牧师凳弯举",
                    "Selected": false
                }, {
                    "name": "杠铃弯举",
                    "Selected": false
                }, {
                    "name": "锤式弯举",
                    "Selected": false
                }, {
                    "name": "绳索弯举",
                    "Selected": false
                },
            ]
        },
        {
            "type": "三头",
            "detail": [
                {
                    "name": "三头体后撑",
                    "Selected": false
                },
                {
                    "name": "直杆三头下压",
                    "Selected": false
                },
                {
                    "name": "哑铃过头提拉",
                    "Selected": false
                },
                {
                    "name": "绳索三头下拉",
                    "Selected": false
                },
            ]
        },
        {
            "type": "腹部",
            "detail": [
                {
                    "name": "负重仰卧起座",
                    "Selected": false
                }
            ]
        },
        {
            "type": "臀部",
            "detail": [
                {
                    "name": "杠铃臂桥",
                    "Selected": false
                }
            ]
        },
        {
            "type": "自重",
            "detail": [
                {
                    "name": "俯卧撑",
                    "Selected": false
                },
                {
                    "name": "引体向上",
                    "Selected": false
                },
                {
                    "name": "双杠臂屈伸",
                    "Selected": false
                }
            ]
        },

    ],
    trainList: [],
    tempList: [],
    reviewList: rvList
}
export default state