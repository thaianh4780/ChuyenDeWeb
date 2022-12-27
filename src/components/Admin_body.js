import React from 'react'
import Admin_nav from './Admin_nav'
import Admin_top from './Admin_top'

export default function Admin_body() {
  return (
    <div id="page-top">
    <div id="wrapper">
        <Admin_nav/>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
               <Admin_top/>
              
            </div>
            <footer class="bg-white sticky-footer">
            </footer>
        </div>
    </div>
</div>
  )
}
