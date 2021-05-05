/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('resume', onDeviceResume, false);

function success(data) {
    console.log(data);
}

function fail(data) {
    console.log(data);
}

function checkForDeepLink_Success(data) {
    console.log(data);
    document.getElementById('hasDeepLink').innerHTML = "deep link found";
}

function checkForDeepLink_Failure(data) {
    console.log(data);
    document.getElementById('hasDeepLink').innerHTML = "Error: " + data;
}

function createContentReferenceSuccess(data) {
    var analytics = {
        channel: 'facebook',
        feature: 'onboarding',
        campaign: 'content 123 launch',
        stage: 'new user',
        tags: ['one', 'two', 'three']
    };

    var properties = {
        $desktop_url: 'http://www.example.com/desktop',
        $android_url: 'http://www.example.com/android',
        $ios_url: 'http://www.example.com/ios',
        $ipad_url: 'http://www.example.com/ipad',
        $match_duration: 2000,
        custom_string: 'data',
        custom_integer: Date.now(),
        custom_boolean: true
    };

    BranchOutSystems.createDeepLink(success, fail, data.object, analytics, properties);
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    BranchOutSystems.initialize(success, fail, false);
    BranchOutSystems.createContentReference(createContentReferenceSuccess, fail, {canonicalIdentifier: 'something123'});
}

function onDeviceResume() {
    BranchOutSystems.readDeepLink(checkForDeepLink_Success, checkForDeepLink_Failure);
}

