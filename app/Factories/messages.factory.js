(function () {
    'use strict';

   angular
        .module('app')
        .factory('MessagesFactory', MessagesFactory)

   MessagesFactory.$inject = ['$http', 'localApi'];

   function MessagesFactory($http, localApi) {
        var service = {
            getRecd: getRecd,
            converse: converse,
            startCon: startCon,
            sendMessage: sendMessage,
            getHistory: getHistory,
            getMessageHistory: getMessageHistory,
            Conversationalists: Conversationalists
        };

       return service;

               function startCon(keys) {

           return $http({
                method: 'POST',
                url: localApi + 'Conversations',
                data: keys,
                dataType:"json",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(function (sation) {
                return sation;
            }, function (error) {
                return error;
            })
        }

       function getRecd(name) {

           return $http({
                method: 'GET',
                url: localApi + 'Users/NameSearch?username=' + name
            }).then(function (response) {
                return response;
            }, function (error) {
                return error;
            })
        }



       function getHistory(id) {

           return $http({
                method: 'GET',
                url: localApi +'Messages/MessageHistory?past='+id
            }).then(function (message) {
                return message.data;
            }, function (error) {
                return error;
            })
        }

       function converse(number) {

           return $http({
                method: 'GET',
                url: localApi + 'Conversations/ConvoSearch',
                params: number
            }).then(function (cons) {
                return cons.data;
            }, function (error) {
                return error;
            })

       }


       function sendMessage(mso) {
            return $http({
                method: 'POST',
                url: localApi + 'Messages',
                data: mso,
                dataType:"json",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(function (sage) {
                    return sage;
                }, function (error) {
                    return error;
                }

           )
        }

       function getMessageHistory(id) {
            return $http ({
            method:'GET',
            url: localApi+'Messages/AllMessages?user='+id
            }). then (function (messages) {
                return messages.data.reverse();
            }, function (error) {
                return error;
            })

       }

       function Conversationalists(id) {
           return $http ({
               method:'GET',
               url: localApi+'Conversations/'+id,
           }).then(function(response){
               return response.data;
           }, function(error) {
               return error;
           })
       }

   }
})();