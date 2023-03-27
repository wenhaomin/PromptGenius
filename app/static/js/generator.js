function gen_class_card_html(class_id, class_name, example_desc) {
    html = `
    <div class="mdui-col class-card-col">
        <div class="mdui-card class-card mdui-hoverable" id="class-card-${class_id}" classid="${class_id}">
            <div class="mdui-card-primary class-card-primary">
                <div class="mdui-card-primary-title">${class_name}</div>
            </div>
            <div class="mdui-card-content">${example_desc}</div>
        </div>
    </div>
    `
    return html
}





// By Haomin Wen
// function generate_prompt_card_html(item){
//     chat_list = item['chat_list']
//     class_list = item['class_list']
//     author = item['author']
//     model = item['model']
//     function_desc = item['function_desc']

//     prompt_text = chat_list[0]
//     class_name = class_list[0]
//     example_desc = prompt_text
//     // <div class="mdui-col-xs-6 mdui-col-sm-6 mdui-col-md-4 mdui-col-lg-3 mdui-col-xl-3 mdui-m-t-2">
//     html = `
//       <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12 mdui-col-lg-12 mdui-col-xl-12 mdui-m-t-12">
//         <div class="mdui-card prompt-card">
//           <div class="mdui-card-primary mdui-color-grey-50 prompt-card-header">
//             <span class="mdui-chip mdui-color-pink-a100">
//               <div class="mdui-chip-title">${class_name}</div>
//             </span>
//             <span class="mdui-chip mdui-color-grey">
//               <div class="mdui-chip-title">${author}</div>
//             </span>
//           </div>

//           <div class="mdui-card-primary mdui-text-color-blue horizontal-flex">
          
//             <div>
//                 <span class="mdui-icon material-icons">lightbulb_outline</span>
//             </div>
//             <div>
//                 <span class="mdui-card-primary-subtitle" style="font-weight:700;">${function_desc}</span>
//             </div>
//           </div>

//           <div class="mdui-card-content"> ${prompt_text} </div>

//           <div class="mdui-card-actions">
//             <button class="mdui-btn mdui-ripple">copy</button>
//             <button class="mdui-btn mdui-btn-icon mdui-float-right">
//               <i class="mdui-icon material-icons">expand_more</i>
//             </button>
//           </div>
//         </div>
//       </div>
//     `
//     return html;
// }


// By Haomin Wen
function generate_prompt_card_html(item){
  chat_list = item['chat_list']
  class_list = item['class_list']
  author = item['author']
  model = item['model']
  function_desc = item['function_desc']

  prompt_text = chat_list[0]
  class_name = class_list[0]
  example_desc = prompt_text
  // <div class="mdui-col-xs-6 mdui-col-sm-6 mdui-col-md-4 mdui-col-lg-3 mdui-col-xl-3 mdui-m-t-2">
  html = `
    <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12 mdui-col-lg-12 mdui-col-xl-12 mdui-m-t-12 mdui-m-b-2">
      <div class="mdui-card prompt-card">
        <div class="mdui-card-primary mdui-color-grey-50 prompt-card-header">
          <span class="mdui-chip mdui-color-theme-200">
            <div class="mdui-chip-title">${class_name}</div>
          </span>

          <span class="mdui-chip mdui-color-theme-400">
              <div class="mdui-chip-title ">${function_desc}</div>
          </span>

          <span class="mdui-chip mdui-color-grey-50">
            <div class="mdui-chip-title mdui-text-color-theme-text">${author}</div>
          </span>
        </div>

        <div class="mdui-card-primary  horizontal-flex">
        
          <div>
              <span class="mdui-icon material-icons mdui-text-color-blue">lightbulb_outline</span>
          </div>
          
          <div class="mdui-card-content mdui-text-color-theme-text"> ${prompt_text} </div>
        </div>

       

        
        </div>
      </div>
    </div>
  `
  return html;
}



//            <div class="mdui-card-header-subtitle">Subtitle</div>
//          <div class="mdui-card-content">${prompt_text}</div>


//  <div class="mdui-card-primary mdui-text-color-blue horizontal-flex">
//
//            <div>
//                <span class="mdui-icon material-icons">lightbulb_outline</span>
//            </div>
//            <div>
//                <span class="mdui-card-primary-subtitle">${function_desc}</span>
//            </div>
//          </div>


{/* <div>
<i class="mdui-icon material-icons">lightbulb_outline</i>
</div> */}

// <div class="mdui-card-primary mdui-text-color-green-900 horizontal-flex">

{/* <div class="mdui-card-primary horizontal-flex">
          
<div class="mdui-chip mdui-color-blue" style = "padding:5px">
    <i class="mdui-card-primary-subtitle">${function_desc}</i>
</div>
</div> */}

          
