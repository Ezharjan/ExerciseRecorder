function readFile(filename) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.OpenTextFile(filename, 1);
    var s = "";
    while (!f.AtEndOfStream)
        s += f.ReadLine() + "/n";
    f.Close();
    return s;
}

function writeFile(filename, filecontent) {
    var fso, f, s;
    fso = new ActiveXObject("Scripting.FileSystemObject");
    f = fso.OpenTextFile(filename, 8, true);
    f.WriteLine(filecontent);
    f.Close();
    alert('write ok');
}

const mutations = {
    addSport(state, menu) {
        // console.log(menu);
        menu.forEach(element => {
            element.detail.forEach(detail => {
                if (detail.Selected) {
                    const todo = {
                        // 加入id作为唯一标识
                        id: new Date() + state.trainList.length,
                        title: detail.name,
                        detailList: [
                            {
                                // 加入id作为唯一标识

                                times: '',
                                weight: '',
                                finish: false
                            }
                        ]
                    }
                    state.trainList.push(todo)
                }
            })
        });
    },
    deleteSport(state, index) {
        state.trainList.splice(index, 1)
    },
    addGroup(state, index) {
        const newGroup = {
            times: '',
            weight: '',
            finish: false
        }
        state.trainList[index].detailList.push(newGroup)
    },
    deleteGroup(state, payload) {
        // 数组的结构
        const [itemIndex, groupIndex] = payload
        state.trainList[itemIndex].detailList.splice(groupIndex, 1)
    },
    finishTrain(state, trainList) {
        const record = {}
        let date = new Date();
        let today = date.getMonth() + 1 + "月" + date.getDate() + "日";
        record.date = today
        record.id = state.reviewList.length
        // console.log(state.trainList);
        if (state.trainList.length) {
            const list = state.trainList.filter(element => {
                // 过滤没有任何完成组的动作
                const dtList = element.detailList.filter((detail) => {
                    // 过滤没有点完成的组
                    // 如果没有设置时间与重量，则设置为0
                    detail.times = detail.times ? detail.times : 0
                    detail.weight = detail.weight ? detail.weight : 0

                    return detail.finish
                })
                return dtList.length
            })
            record.list = list
        }
        if (confirm("是否确认添加？")) {
            if (record.list && record.list.length) {
                state.reviewList.push(record)
                // 加入到本地储存
                try {                    
                    localStorage.setItem('reviewList', JSON.stringify(state.reviewList))
                    // writeFile("./db.json", JSON.stringify(state.reviewList))
                } catch (e) { }
                // 初始化当前训练列表
                state.trainList = []
            } else {
                alert("没有已经完成的动作")
                state.trainList = []
            }
        }
    }
}
export default mutations