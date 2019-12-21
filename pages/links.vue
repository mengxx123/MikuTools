<template>
    <div class="links">
        <nya-container title="友情链接">
            <div v-for="(item, index) in links" :key="index">
                <div class="nya-subtitle">
                    {{ item.title }}
                </div>
                <ul class="nya-list">
                    <li v-for="(list, index2) in item.list" :key="index2">
                        <span v-if="list.name">{{ list.name }}：</span>
                        <a
                            v-if="list.link"
                            :title="list.description"
                            :href="list.link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >{{ list.link }}</a>
                        <a v-else href="javascript:;">暂无网站</a>
                    </li>
                </ul>
            </div>
            <div>
                <div class="nya-subtitle">
                    感谢以下项目(未全部列出)
                </div>
                <ul class="nya-list">
                    <li v-for="(item, index) in project" :key="index">
                        <a :href="item" target="_blank" rel="noopener noreferrer">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </nya-container>
    </div>
</template>

<script>
export default {
    name: 'Links',
    head() {
        return {
            title: this.title
        };
    },
    data() {
        return {
            title: `友情链接 - ${process.env.title}`,
            links: [
                {
                    title: '主要维护人员',
                    list: [
                        {
                            name: 'Miaow',
                            description: '只是当时已惘然',
                            link: 'http://114.55.144.185/'
                        },
                        {
                            name: 'Tamshen',
                            description: '图标设计',
                            link: 'http://tamshen.com'
                        },
                        {
                            name: 'So',
                            description: '不知道干啥的'
                        }
                    ]
                },
                {
                    title: '其他',
                    list: [
                        {
                            name: 'GitHub地址',
                            description: '给个 star 呗',
                            link: 'https://github.com/CatMoe/MikuTools'
                        },
                        {
                            name: '服务器提供商',
                            description: '阿里云',
                            link: 'https://aliyun.com/'
                        }
                    ]
                }
            ],
            project: [
                'https://github.com/nuxt',
                'https://github.com/hotoo/pinyin',
                'https://github.com/lodash/lodash',
                'https://github.com/necolas/normalize.css/',
                'https://github.com/hilongjw/vue-lazyload',
            ]
        };
    }
};
</script>
