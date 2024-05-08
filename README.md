### Stimulus numeric controls component

Simple functionality to increase and decrease numeric value with custom controls

Install with
`yarn add stimulus-numeric-controls`

Add this to your javascript/controllers/index.js

```
import NumericControls from "stimulus-numeric-controls";
application.register("numeric-controls", NumericControls);
```

## How to use

add `data-controler="numeric-controls"` on an element that is encompasing both, your numeric input field and the controls

add `data-numeric-controls-target="value"` on the numeric input field

add `data-action="click->numeric-controls#increment"` on the control that should be incrementing the numeric input field

add `data-action="click->numeric-controls#decrement"` on the control that should be decrementing the numeric input field

### Optional

- add _step_ attribute to the input to increment by certain value (increments by 1 by default)
- add _min_ attribute to the input to not be able to decrement beyond certain value (no min by default)
- add _max_ attribute to not be able to incremenet beyond certain value

### To remove the browser default add and decrease arrows
**For chrome, Safari, Edge, Opera :**

```
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

```

**For firefox :**

```
input[type=number]{
    -moz-appearance: textfield;
}
```

Source: https://www.geeksforgeeks.org/how-to-disable-arrows-from-number-input/


### Example use

#### Simple HTML

```
.....
  <div data-controller="numeric-controls" style="position:relative; height: max-content">
    <input type="number" min="0" step="3"  data-numeric-controls-target="value" >
    <div style="display:flex; position: absolute; top: 25%; right: 2rem">
      <button type="button" data-action="click->numeric-controls#decrement" style="margin-right:0.5rem">-</button>
      <button type="button" data-action="click->numeric-controls#increment">+</button>
    </div>
  </div>
.....

```

#### Rails and simple form (with tailwind)

Input classes are already set up to be tailwindy

```
<%= simple_form_for @widget do |f| %>
  <%= f.input :name %>
  <%= f.input :category, as: :select, collection: ["one", "two", "three"] %>
    <%= f.input :price do %>
      <div data-controller="numeric-controls">
        <%= f.input :price, label: false,  input_html:{ min: 0, step: 4, data: {numeric_controls_target: "value"}} %>
        <%= content_tag(:div, class: "absolute inset-y-0 right-0 flex justify-end items-center gap-x-1.5 pe-3") do %>
          <%= button_tag(type: 'button',
                        data: { action: "click->numeric-controls#increment" },
                        class: "size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800") do %>
            <%= content_tag(:svg, class: "flex-shrink-0 size-3.5", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round") do%>
                <%= content_tag(:path, nil, d: "M5 12h14")  +  content_tag(:path, nil, d: "M12 5v14")%>
            <% end %>
          <% end %>
          <%= button_tag(type: 'button',
                        data: { action: "click->numeric-controls#decrement" },
                        class: "size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800") do %>
            <%= content_tag(:svg, class: "flex-shrink-0 size-3.5", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", stroke_width: "2", stroke_linecap: "round", stroke_linejoin: "round") do%>
                <%= content_tag(:path, nil, d: "M5 12h14")%>
            <% end %>
          <% end %>
        <% end %>
      </div>
    <% end %>
  <%= f.input :bought %>
  <%= f.submit %>
<% end %>
```

![Example 2, Example 2 screenshot](/images/example2.png)

#### Rails, simple form and simple form configured with tailwind

```
<%= tailwind_simple_form_for @widget do |f| %>
  <%= f.input :name %>
  <%= f.input :category, as: :select, collection: ["one", "two", "three"] %>
  <%= f.input :price, wrapper: :numeric, input_html:{ min: 0, step: 4} %>
  <%= f.input :bought %>
  <%= f.submit %>
<% end %>

```
