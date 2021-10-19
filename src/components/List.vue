<template>
    <div class="container">
    <div class="content">
        <div class="list-header"> 
        <div class="id">Id</div>
        <div class="userId">UserId</div>
                <div class="title">Title</div>
                <div class="description">Body </div>
        </div>
        <ul class="list">
            <li class="list-item" v-for="item in data" :key="item.id">
                <div class="id">{{ item.id }}</div>
                <div class="userId">{{ item.userId }}</div>
                <div class="title">{{ item.title }}</div>
                <div class="description"> {{ item.body }}</div>
                </li>
        </ul>
       
    </div>
     <button v-on:click="fetchData" class="btn">GetData</button>
        </div>
</template>
<script>
import axios from "axios";
const link= 'https://jsonplaceholder.typicode.com/posts';
export default {
    name: 'List',
    
    computed:{ 
        data(){
            return this.$store.state.listData
            }
    }
,
    
    created () {    
                this.fetchData();
            },
    methods: {
                fetchData(){
                    var self=this;
                    axios.get(link)
                        .then(function (response) {
                            console.log(self.$store.state.listData);
                            self.$store.dispatch('addList',response.data)
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                        .then(function () {

                        });
                        }
                    }
            }
</script>