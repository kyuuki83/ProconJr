import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid', 'timeGrid', 'list'], // 使用したいactionやviewに対するプラグインを指定します
    locale: 'ja',                             // 上記に書いた日本語の設定です
    header: {                                 // ヘッダーに表示する内容を指定します
      left:   'title',                        // ヘッダーの左側に表示する物を指定
      center: '',                             // ヘッダーの中央に表示する物を指定
      right:  'today,prev,next'               // ヘッダーの左側に表示する物を指定
    },
    handleWindowResize: false,                // ウインドウサイズ変更時カレンダーサイズを変更するか否か（falseで変更をしません）
    minTime: "00:00:00",                      // スケジュールの開始時間
    maxTime: "24:00:00",                      // スケジュールの最終時間
    defaultTimedEventDuration: '10:00:00',    // 画面上に表示する初めの時間(初期にスクロールされている場所)
    slotDuration: '00:15:00',                 // 表示する時間軸の単位（左記の設定で15分刻み）
    snapMinutes: 15,                          // 選択する時間間隔（15分単位で範囲指定できます）
    editable: false,                          // カレンダーのイベントが変更フラグ（falseで編集不可）
    droppable: false,                         // 外部要素からのドラッグアンドドロップを受け付けるか（falseで不可）
    dragRevertDuration: 500,                  // ドラッグに失敗した時に戻るまでの時間（ms）
    selectable: false,                        // 選択不可
    selectHelper: true,                       // 選択時にプレースホルダーを描画
    scrollTime: '09:00:00',                   // 画面上に表示する初めの時間(初期にスクロールされている場所)
    unselectAuto: false,                      // ページのどこかをクリックしたとき、選択状態をキャンセルするか
    selectMinDistance: 0,                     // クリック後に移動した距離で、clickかdragか判定
    firstDay: 1,                              // 週始めの曜日指定（左記では月曜日始まり）
    eventTimeFormat: {                        // イベントの時間表示方法の設定（左記では7時は7:00と表示されます）
      hour: 'numeric',
      minute: '2-digit'
    },
    views: {                                  // 各ビュー（月表示、週表示など）のみに適用される設定ができます
      dayGridMonth: {},
      dayGrid: {},
      timeGrid: {},
      week: {},
      day: {}
    },
    // eventsは実際表示させるイベントのデータをjson形式で書くことができます
    // ajaxで動的にデータを取得できたりもします
    events: function(fetchInfo, successCallback, failureCallback) {},
    dateClick: function(dateClickInfo) {},    // 日付又は時間のクリックした時に走るメソッド
    select: function(selectionInfo) {},       // こちらも日付又は時間を選択した場合に走るメソッドですが、ドラッグ（複数日選択）でも走ります
    dayRender: function(dayRenderInfo) {},    // 日付の表示する際に走るメソッドで特定の日だけ色を変えたい等できます
    eventClick: function (info) {}            // イベントをクリックした時に走るメソッド
  });
  calendar.render();
});