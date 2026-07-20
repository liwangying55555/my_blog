import{_ as e,r as t,o as p,c as o,a as s,b as c,d as i,e as l}from"./app-BBKO0RFJ.js";const u={},r={href:"https://cn.mobx.js.org/",target:"_blank",rel:"noopener noreferrer"};function d(k,n){const a=t("ExternalLinkIcon");return p(),o("div",null,[s("blockquote",null,[s("p",null,[s("a",r,[n[0]||(n[0]=c("Mobx手册",-1)),i(a)])])]),n[1]||(n[1]=l(`<p>MobX 有一组装饰器来定义 observable 属性的行为。</p><ul><li><p><code>observable</code>: <code>observable.deep</code>的别名</p></li><li><p><code>observable.deep</code>: 任何 <code>observable</code> 都使用的默认的调节器。它将任何(尚未成为 <code>observable</code> )数组，映射或纯对象克隆并转换为 <code>observable</code> 对象，并将其赋值给给定属性</p></li><li><p><code>observable.ref</code>: 禁用自动的 <code>observable</code> 转换，只是创建一个 <code>observable</code> 引用</p></li><li><p><code>observable.shallow</code>: 只能与集合组合使用。 将任何分配的集合转换为 <code>observable</code>，但该集合的值将按原样处理</p></li><li><p><code>observable.struct</code>: 就像 <code>ref</code>, 但会忽略结构上等于当前值的新值</p></li><li><p><code>computed</code>: 创建一个衍生属性</p></li><li><p><code>computed(options)</code>: 同 <code>computed</code> , 可设置选项</p></li><li><p><code>computed.struct</code>: 与 <code>computed</code> 相同，但是只有当视图产生的值与之前的值结构上有不同时，才通知它的观察者</p></li><li><p><code>action</code>: 创建一个动作</p></li><li><p><code>action(name)</code>: 创建一个动作，重载了名称</p></li><li><p><code>action.bound</code>: 创建一个动作, 并将 <code>this</code> 绑定到了实例</p></li></ul><h3 id="_1-可观察性observable" tabindex="-1"><a class="header-anchor" href="#_1-可观察性observable" aria-hidden="true">#</a> 1.可观察性observable</h3><p>observable对象可以是一个普通对象、数组等引用型数据。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Michel&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">likes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sara&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在内存中运行如下，绿色框表示<strong>可观察</strong>属性</p><figure><img src="https://cn.mobx.js.org/images/observed-refs.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="深层可观察性" tabindex="-1"><a class="header-anchor" href="#深层可观察性" aria-hidden="true">#</a> 深层可观察性</h4><p>默认<code>@observable</code>装饰器使用时，是自动进行了递归转换的，将整个对象或者数组转换成深层可观察性。</p><h4 id="引用观察性" tabindex="-1"><a class="header-anchor" href="#引用观察性" aria-hidden="true">#</a> 引用观察性</h4><p>当不需要将对象转换成observable，例如：DOM元素，JSX元素等，只需要存储引用而不需要转换，则使用<code>@observable.ref</code>即可。</p><h4 id="浅层可观察性" tabindex="-1"><a class="header-anchor" href="#浅层可观察性" aria-hidden="true">#</a> 浅层可观察性</h4><p><code>observable.shallow</code>的管理着一个可观察对象的集合，类似于浅拷贝，只有最外层的变量具有可观察性，内层就是普通对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Message</span> <span class="token punctuation">{</span>
    @observable message <span class="token operator">=</span> <span class="token string">&quot;Hello world&quot;</span>

    <span class="token comment">// 虚构的例子，如果 author 是不可变的，我们只需要存储一个引用，不应该把它变成一个可变的 observable 对象</span>
    @observable<span class="token punctuation">.</span>ref author <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token comment">// 只有a,b,c变量是observable对象，d不是</span>
    @observable<span class="token punctuation">.</span>shallow <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&#39;Hello world&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-computed、autorun和reaction的区别" tabindex="-1"><a class="header-anchor" href="#_2-computed、autorun和reaction的区别" aria-hidden="true">#</a> 2.computed、autorun和reaction的区别</h3><p><code>@computed</code>的和<code>autorun</code>的区别在于，前者是可以响应式的产生一个能被其他observer使用的值，后者只是达到某个效果（如打印日志、发起网络请求等）。</p><p>在运行中，假如当前计算属性所依赖的数据状态未更改或是该计算属性未被被使用，会被自动暂停并被回收。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> observable<span class="token punctuation">,</span> decorate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span>
<span class="token comment">// 装饰器写法</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price
    <span class="token punctuation">}</span>

    @observable price <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">// computed</span>
    @observable <span class="token keyword">get</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// decorate引入方式</span>
<span class="token keyword">class</span> <span class="token class-name">DemoWithDecorate</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price
    <span class="token punctuation">}</span>

    price <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">get</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">decorate</span><span class="token punctuation">(</span>DemoWithDecorate<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> observable<span class="token punctuation">,</span>
    <span class="token literal-property property">total</span><span class="token operator">:</span> computed<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而reaction可以监听一个表达式，并在回调事件里面进行各种数据处理或接口请求，如下是一个demo。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> observable<span class="token punctuation">,</span> reaction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 只调用一次并清理掉 reaction : 对 observable 值作出反应。</span>
<span class="token comment">// 第三个参数是一个参数对象，常用值如下</span>
<span class="token keyword">const</span> reaction3 <span class="token operator">=</span> <span class="token function">reaction</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> counter<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> reaction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;reaction 3: invoked. counter.count = &quot;</span> <span class="token operator">+</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        reaction<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">fireImmediately</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 布尔值，用来标识效果函数是否在数据函数第一次运行后立即触发。默认值是 false</span>
        <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 可用于对效果函数进行去抖动的数字(以毫秒为单位)。如果是 0(默认值) 的话，那么不会进行去抖</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果拿比较熟悉的vue来类比的话，reaction更像是watch，computed当然是computed，类比于计算属性</p></div><h3 id="_3-绑定动作action、runinaction" tabindex="-1"><a class="header-anchor" href="#_3-绑定动作action、runinaction" aria-hidden="true">#</a> 3.绑定动作action、runInAction</h3><p><code>@action</code>和<code>@action.bound</code>的区别：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  @observable massage <span class="token operator">=</span> <span class="token string">&#39;Hello world&#39;</span>

  <span class="token comment">// 利用箭头函数改变this指向</span>
  @<span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;改变message变量&#39;</span><span class="token punctuation">)</span>
  <span class="token function-variable function">handleSet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>massage <span class="token operator">=</span> t
  <span class="token punctuation">}</span>

  <span class="token comment">// 自动绑定this指向</span>
  @action<span class="token punctuation">.</span>bound <span class="token function">handleGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>massage<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>runInAction</code>是一个工具函数，它接收代码块并在（异步）动作中执行，便于有效的跟踪。</p><p>以下是在<code>Promise</code>中使用，应保证每一个异步函数都集中的改变状态</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mobx<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">enforceActions</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
    @observable githubProjects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    @observable state <span class="token operator">=</span> <span class="token string">&quot;pending&quot;</span> <span class="token comment">// &quot;pending&quot; / &quot;done&quot; / &quot;error&quot;</span>

    @action
    <span class="token function-variable function">fetchProjects</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>githubProjects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&quot;pending&quot;</span>
        <span class="token function">fetchGithubProjectsSomehow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
            <span class="token parameter">projects</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> filteredProjects <span class="token operator">=</span> <span class="token function">somePreprocessing</span><span class="token punctuation">(</span>projects<span class="token punctuation">)</span>
                <span class="token comment">// 将‘“最终的”修改放入一个异步动作中</span>
                <span class="token function">runInAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>githubProjects <span class="token operator">=</span> filteredProjects
                    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&quot;done&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// 过程的另一个结局:...</span>
                <span class="token function">runInAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&quot;error&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是在<code>async\\await</code>中的使用方式，<code>action</code>一般只应用于代码块第一行至第一个<code>await</code>，因此，之后的状态修改应该被包装成动作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mobx<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">enforceActions</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
    @observable githubProjects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    @observable state <span class="token operator">=</span> <span class="token string">&quot;pending&quot;</span> <span class="token comment">// &quot;pending&quot; / &quot;done&quot; / &quot;error&quot;</span>

    @action
    <span class="token function-variable function">fetchProjects</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>githubProjects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&quot;pending&quot;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchGithubProjectsSomehow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> filteredProjects <span class="token operator">=</span> <span class="token function">somePreprocessing</span><span class="token punctuation">(</span>projects<span class="token punctuation">)</span>
            <span class="token comment">// await 之后，再次修改状态需要动作:</span>
            <span class="token function">runInAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&quot;done&quot;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>githubProjects <span class="token operator">=</span> filteredProjects
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">runInAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&quot;error&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30))])}const b=e(u,[["render",d],["__file","06.Mobx API使用学习.html.vue"]]);export{b as default};
