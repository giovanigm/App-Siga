package com.appsiga;

import android.view.Gravity;
import android.widget.LinearLayout;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {

    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);

        view.setBackgroundResource(R.drawable.splash);
        view.setGravity(Gravity.CENTER);

        return view;
    }

}