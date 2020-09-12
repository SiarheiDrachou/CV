<template>
    <section class="aside-tags">
        <h3 class="tags-header"> Tags </h3>

        <div class="tags-block">
            <span 
                class="tags-text" 
                v-for="(tag, id) in tags" 
                :key="id" 
                v-text="tag.text"
            >  
            </span>
        </div>           
    </section>
</template>

<script>
export default {
    data: function() {
        return {
            tags: [
                {
                    text: 'Business'
                },
                {
                    text: 'Freelance'
                },
                {
                    text: 'Money'
                },
                {
                    text: 'Experience'
                },
                {
                    text: 'Lifestyle'
                },
                {
                    text: 'SEO'
                },
                {
                    text: 'Wordpress'
                },
                {
                    text: 'Marketing'
                },
                {
                    text: 'UX'
                },
                {
                    text: 'Modern'
                },
                {
                    text: 'Success'
                },
                {
                    text: 'Nature'
                },
                {
                    text: 'Productivity'
                },
                {
                    text: 'Sales page'
                },
                {
                    text: 'Sell'
                },
                {
                    text: 'Teamwork'
                },
                {
                    text: 'Monetize'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .aside-tags {
        width: 267px;
        height: 309px;
        margin-bottom: 60px;

        .tags-header {
            line-height: 21px;
            margin-bottom: 26px;
        }

        .tags-block {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            height: 277px;
            width: 269px;

            .tags-text {
                background-color: #EBEBEB;
                border-radius: 3px;
                padding: 5px 11px;
                font-size: 14px;
                height: 30px;
                cursor: pointer;
            }

            .tags-text:hover,
            .tags-text:active {
                text-decoration: underline;
            }
        }
    }
</style>